# equistart-ui

Install dependencies using $yarn

Install app on Android: $yarn android

Install app on ios:
$cd ios
$pod install
$cd ..
check connected device and emulators: $xcrun xctrace list devices
or 
$xcrun instruments -s devices
$npm install -g ios-deploy 
Run app on device using: $yarn ios --device "Kool's iPhone"
or 
$yarn ios --udid 0412e2c2******51699

Use xcode to install the app for the first time as you need to set the signing account.
Contract @dev for more info.
