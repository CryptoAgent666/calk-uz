#!/bin/bash
# Capture App Store 6.9" screenshots (1320x2868) from the iOS simulator.
# Navigates the Capacitor webview by swapping server.url in the INSTALLED app
# bundle and cold-relaunching for each page (no tap tooling needed).
set -e
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8

SIM="iPhone 17 Pro Max"
BID="uz.calk.calculator"
APP="/Users/konstantin/Library/Developer/Xcode/DerivedData/App-cbzzlmwlbqkqyiddegmljbssaabm/Build/Products/Debug-iphonesimulator/App.app"
OUT="/Users/konstantin/Projects/calk-uz/app-store-assets/screenshots/6.9"
mkdir -p "$OUT"

xcrun simctl boot "$SIM" 2>/dev/null || true
xcrun simctl bootstatus "$SIM" -b
xcrun simctl install "$SIM" "$APP"

BUNDLE=$(xcrun simctl get_app_container "$SIM" "$BID" app)
CONF="$BUNDLE/capacitor.config.json"
ORIG=$(cat "$CONF")

shoot() {
  local name="$1" url="$2"
  node -e "const fs=require('fs');const p=process.argv[1];const u=process.argv[2];const c=JSON.parse(fs.readFileSync(p));c.server.url=u;fs.writeFileSync(p,JSON.stringify(c));" "$CONF" "$url"
  xcrun simctl terminate "$SIM" "$BID" 2>/dev/null || true
  xcrun simctl launch "$SIM" "$BID" >/dev/null
  sleep 9
  xcrun simctl io "$SIM" screenshot "$OUT/$name.png" 2>/dev/null
  echo "captured $name -> $url"
}

shoot "1-home"       "https://calk.uz/ru"
shoot "2-ndfl"       "https://calk.uz/ru/calculator/ndfl"
shoot "3-kredit"     "https://calk.uz/ru/calculator/kredit"
shoot "4-ipoteka"    "https://calk.uz/ru/calculator/ipoteka"
shoot "5-kursy"      "https://calk.uz/ru/calculator/kursy-bankov"
shoot "6-kommunalka" "https://calk.uz/ru/calculator/obshchaya-kommunalka"

# restore original config in the installed bundle
printf '%s' "$ORIG" > "$CONF"
echo "ALL_DONE"
ls -la "$OUT"
