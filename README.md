# react-native-panning-scrollview
[![CircleCI](https://circleci.com/gh/Moistbobo/react-native-panning-scrollview.svg?style=shield)](https://github.com/Moistbobo/react-native-panning-scrollview)
![David](https://status.david-dm.org/gh/moistbobo/react-native-panning-scrollview.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/0b7d9f0954f5814711b4/maintainability)](https://codeclimate.com/github/Moistbobo/react-native-panning-scrollview/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0b7d9f0954f5814711b4/test_coverage)](https://codeclimate.com/github/Moistbobo/react-native-panning-scrollview/test_coverage)

A ScrollView component that moves along with the header section, and only scrolls after the header has been pushed up

![](https://i.imgur.com/RejLzBD.gif)

## Props
| prop             | type                        | description            |   |   |
|------------------|-----------------------------|------------------------|---|---|
| children         | <code>ReactNode &#124; ReactNodeArray</code>    | The scrollview content |   |   |
| headerImage | `ImageSourcePropType`          |    Optional.    The header image. Defaults to a white background view if not supplied.                |   |   |
| badgeImage          | `ImageSourcePropType` |       Optional.   The badge image. The component will automatically apply border radius and enforce a size.              |   |   |
| translateRatio | `number` | Optional. Affect the rate that the header translates. Higher values = slower. Defaults to `3` |
|useNativeDriver |  `boolean` | Optional. Control whether to use nativeDriver. For compatibility. Defaults to `true`
