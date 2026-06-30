#!/bin/bash
# Capture NATIVE CalkUZ screenshots at the sizes THIS App Store listing accepts.
#
#   iPhone slot = "6.5\" Display"  -> 1242 x 2688  (iPhone 11 Pro Max)
#   iPad   slot = "13\" Display"   -> 2064 x 2752  (iPad Pro 13" M5)
#
# NB: the listing's iPhone slot is 6.5", NOT 6.9". A 1320x2868 (6.9") image is
# rejected by the uploader ("dimensions are wrong"). If you ever migrate the
# listing to a 6.9" slot, swap the iPhone device for "iPhone 17 Pro Max".
#
# Build the app first:
#   xcodebuild -project CalkUZ.xcodeproj -scheme CalkUZ -configuration Debug \
#     -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=latest' \
#     -derivedDataPath /tmp/CalkUZ-shots CODE_SIGNING_ALLOWED=NO build
set -e

APP="${APP:-/tmp/CalkUZ-shots/Build/Products/Debug-iphonesimulator/CalkUZ.app}"
BUNDLE=$(plutil -extract CFBundleIdentifier raw "$APP/Info.plist")
OUT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)/app-store-assets/screenshots"
echo "Bundle: $BUNDLE  ->  $OUT"

# name|kind(CALC/TAB)|value
SCREENS=(
  "1-hub|TAB|0"
  "2-salary|CALC|salary"
  "3-loan|CALC|loan"
  "4-mortgage|CALC|mortgage"
  "5-customs|CALC|customs"
  "6-currency|TAB|1"
)

# Ensure a 6.5" iPhone (iPhone 11 Pro Max -> 1242x2688) exists.
ensure_iphone65() {
  local udid
  udid=$(xcrun simctl list devices | grep "Calk-65 (" | grep -oE '\([A-F0-9-]{36}\)' | head -1 | tr -d '()')
  if [ -z "$udid" ]; then
    local rt
    rt=$(xcrun simctl list runtimes | grep -i "iOS" | grep -oE "com.apple.CoreSimulator.SimRuntime.iOS[^ ]*" | tail -1)
    udid=$(xcrun simctl create "Calk-65" "com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro-Max" "$rt")
  fi
  echo "$udid"
}

IPHONE_UDID=$(ensure_iphone65)
IPAD_UDID=$(xcrun simctl list devices available | grep "iPad Pro 13-inch (M5) (" | head -1 | grep -oE '\([A-F0-9-]{36}\)' | tr -d '()')

# udid | output slug
DEVICES=(
  "$IPHONE_UDID|6.5-native"
  "$IPAD_UDID|ipad-13-native"
)

for entry in "${DEVICES[@]}"; do
  UDID="${entry%%|*}"; slug="${entry##*|}"
  [ -z "$UDID" ] && { echo "!! no device for $slug"; continue; }
  echo "== $slug ($UDID) =="
  xcrun simctl boot "$UDID" 2>/dev/null || true
  xcrun simctl bootstatus "$UDID" >/dev/null 2>&1 || sleep 6
  xcrun simctl status_bar "$UDID" override --time "9:41" \
    --batteryState charged --batteryLevel 100 --cellularBars 4 --wifiBars 3 2>/dev/null || true
  xcrun simctl install "$UDID" "$APP"
  dir="$OUT/$slug"; mkdir -p "$dir"
  for s in "${SCREENS[@]}"; do
    sname="${s%%|*}"; rest="${s#*|}"; kind="${rest%%|*}"; val="${rest##*|}"
    xcrun simctl terminate "$UDID" "$BUNDLE" 2>/dev/null || true; sleep 1
    if [ "$kind" = "CALC" ]; then
      SIMCTL_CHILD_CALK_INITIAL_CALC="$val" SIMCTL_CHILD_CALK_SCREENSHOT_MODE="1" \
        xcrun simctl launch "$UDID" "$BUNDLE" >/dev/null
    else
      SIMCTL_CHILD_CALK_INITIAL_TAB="$val" SIMCTL_CHILD_CALK_SCREENSHOT_MODE="1" \
        xcrun simctl launch "$UDID" "$BUNDLE" >/dev/null
    fi
    sleep 5
    xcrun simctl io "$UDID" screenshot "$dir/${sname}.png" >/dev/null 2>&1
    echo "  ✓ ${sname}.png  $(sips -g pixelWidth -g pixelHeight "$dir/${sname}.png" 2>/dev/null | awk '/pixel/{print $2}' | paste -sd 'x' -)"
  done
  xcrun simctl terminate "$UDID" "$BUNDLE" 2>/dev/null || true
done
echo "DONE -> $OUT/{6.5-native,ipad-13-native}"
