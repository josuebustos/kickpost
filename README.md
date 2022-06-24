# kickpost
kickpost react native app

## Initialize Expo App
install this to compose native apps faster
npm install -g sharp-cli@^1.10.0

## Initialize Expo App
Install a fresh expo base app
expo init my-app --template @native-base/expo-template

## Install Supporting Packages for React Navigation
Install these packages for native react router navigation

expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native


### Native Base UI Framework
https://docs.nativebase.io/install-expo


### React Native Navigation
https://reactnavigation.org/docs/navigating


### Build for distribution
npm install -g eas-cli


### Create Signed APK
https://www.youtube.com/watch?v=avftrygdDRM&t=11s
https://instamobile.io/android-development/generate-react-native-release-build-android/


### Create signed ios IPA
https://www.youtube.com/watch?v=DLvdZtTAJrE

https://stackoverflow.com/questions/63913267/generate-deubg-ipa-for-ios-in-react-native#:~:text=Generate%20Deubg%20IPA%20for%20iOS%20in%20React%20Native.,export%20it.%20Export%20it%20wherever%20you%20want.%20



## Fix Xcode Errors

main.jsbundle does not exist #32108
https://github.com/facebook/react-native/issues/32108

https://stackoverflow.com/questions/42610070/what-is-the-meaning-of-no-bundle-url-present-in-react-native/48471978#48471978

https://stackoverflow.com/questions/53289524/xcode-10-2-1-command-phasescriptexecution-failed-with-a-nonzero-exit-code?page=1&tab=scoredesc#tab-top

No bundle URL present.

### Resolution

Could not find node. Make sure it is in bash PATH or set the NODE_BINARY environment variable.

$ sudo ln -s $(which node) /usr/local/bin/node

source: https://stackoverflow.com/questions/67337836/new-rn-project-in-m1-mbp-built-failed-could-not-find-node-make-sure-it-is-in