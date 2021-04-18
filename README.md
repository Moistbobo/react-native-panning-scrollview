# react-native-panning-scrollview
[![CircleCI](https://circleci.com/gh/Moistbobo/react-native-panning-scrollview.svg?style=shield)](https://app.circleci.com/pipelines/github/Moistbobo/react-native-panning-scrollview)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/Moistbobo/react-native-panning-scrollview)](https://codeclimate.com/github/Moistbobo/react-native-panning-scrollview/test_coverage)
[![Maintainability](https://img.shields.io/codeclimate/tech-debt/Moistbobo/react-native-panning-scrollview)](https://codeclimate.com/github/Moistbobo/react-native-panning-scrollview/maintainability)
![David](https://status.david-dm.org/gh/moistbobo/react-native-panning-scrollview.svg)
[![npm](https://img.shields.io/npm/v/react-native-panning-scrollview?color=dark%20green)](https://www.npmjs.com/package/react-native-panning-scrollview)
![license](https://img.shields.io/github/license/Moistbobo/react-native-panning-scrollview)

A ScrollView component that moves along with the header section, and only scrolls after the header has been pushed up

![](https://i.imgur.com/RejLzBD.gif)

## Props
| prop             | type                        | description            |
|------------------|-----------------------------|------------------------|
| children         | <code>ReactNode &#124; ReactNodeArray</code>    | The scrollview content 
| headerImage | `ImageSourcePropType`          |    Optional.    The header image. Defaults to a white background view if not supplied.                
| badgeImage          | `ImageSourcePropType` |       Optional.   The badge image. The component will automatically apply border radius and enforce a size.           
| translateRatio | `number` | Optional. Affect the rate that the header translates. Higher values = shorter translate distance. Defaults to `3`. Recommended `1 - 5`
|useNativeDriver |  `boolean` | Optional. Control whether to use nativeDriver. For compatibility. Defaults to `true`
|backgroundColor | `ColorValue` | Optional. Change the color of the scrollview container.|

## How it works
This component uses a scrollview and some `Animated` trickery to create the illusion of a scrollview that only scrolls after the header has been panned upwards.


## Demo
1. Clone this repo
2. `cd demo`
3. `yarn`
4. `yarn android` or `yarn ios`
