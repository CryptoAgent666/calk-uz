#!/bin/bash
# Capture NATIVE CalkUZ screenshots at App Store required sizes.
#   iPhone 6.9" -> iPhone 17 Pro Max  (1320 x 2868)
#   iPad   13"  -> iPad Pro 13" (M5)  (2064 x 2752)
set -e

APP="/tmp/CalkUZ-shots/Build/Products/Debug-iphonesimulator/CalkUZ.app"
BUNDLE=$(plutil -extract CFBundleIdentifier raw "$APP/Info.plist")
OUT="/Users/konstantin/Projects/calk-uz/app-store-assets/screenshots"
echo "Bundle: $BUNDLE"

# name|kind(CALC/TAB)|value
SCREENS=(
  "1-hub|TAB|0"
  "2-salary|CALC|salary"
  "3-loan|CALC|loan"
  "4-mortgage|CALC|mortgage"
  "5-customs|CALC|customs"
  "6-currency|TAB|1"
)

# device name | output slug
DEVICES=(
  "iPhone 17 Pro Max|6.9-native"
  "iPad Pro 13-inch (M5)|ipad-13-native"
)

for entry in "${DEVICES[@]}"; do
  dname="${entry%%|*}"
  slug="${entry##*|}"
  UDID=$(xcrun simctl list devices available | grep "$dname (" | head -1 | grep -oE '\([A-F0-9-]{36}\)' | tr -d '()')
  [ -z "$UDID" ] && { echo "!! device not found: $dname"; continue; }
  echo "== $dname ($UDID) =="
  xcrun simctl boot "$UDID" 2>/dev/null || true
  xcrun simctl bootstatus "$UDID" 2>/dev/null || sleep 6
  # Clean Apple-style status bar
  xcrun simctl status_bar "$UDID" override --time "9:41" \
    --batteryState charged --batteryLevel 100 --cellularBars 4 --wifiBars 3 2>/dev/null || true
  xcrun simctl install "$UDID" "$APP"
  dir="$OUT/$slug"; mkdir -p "$dir"
  for s in "${SCREENS[@]}"; do
    sname="${s%%|*}"; rest="${s#*|}"; kind="${rest%%|*}"; val="${rest##*|}"
    xcrun simctl terminate "$UDID" "$BUNDLE" 2>/dev/null || true
    sleep 1
    if [ "$kind" = "CALC" ]; then
      SIMCTL_CHILD_CALK_INITIAL_CALC="$val" SIMCTL_CHILD_CALK_SCREENSHOT_MODE="1" \
        xcrun simctl launch "$UDID" "$BUNDLE" >/dev/null
    else
      SIMCTL_CHILD_CALK_INITIAL_TAB="$val" SIMCTL_CHILD_CALK_SCREENSHOT_MODE="1" \
        xcrun simctl launch "$UDID" "$BUNDLE" >/dev/null
    fi
    sleep 5
    xcrun simctl io "$UDID" screenshot "$dir/${sname}.png" >/dev/null 2>&1
    size=$(sips -g pixelWidth -g pixelHeight "$dir/${sname}.png" 2>/dev/null | awk '/pixel/{print $2}' | paste -sd 'x' -)
    echo "  ✓ ${sname}.png  ${size}"
  done
  xcrun simctl terminate "$UDID" "$BUNDLE" 2>/dev/null || true
  xcrun simctl status_bar "$UDID" clear 2>/dev/null || true
done
echo "DONE -> $OUT/{6.9-native,ipad-13-native}"
