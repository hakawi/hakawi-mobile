# HAKAWI MOBILE

Hakawi is a health game base app. 
Nowaday people use to choose sit more than before, and with their device they can easy dwell into social network or game in many hours.
So we decide to make this app too help notify them about their "not-move-too-long" situation and guide them to help their health.

## Techs

Base tech is react-native. Other than that we use tensorflow js to detect face and pose, geolocatin to detect current position.

## Install

Following step by steps to simulator this app.
Require Xcode to simulate IOS device or Android Studio to simulate Android device.

#### Install neccessary packages

```
cd hakawi
yarn
```

#### For IOS

```
cd ios
pod install
cd ../
yarn run ios
```

- Have troubles when run please run 
```
yarn build:ios
```

#### For Android

```
yarn run android
```
