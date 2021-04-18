import * as React from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';

const IMG_HEIGHT = 200;

const FAKE_BORDER_HEIGHT = 30;

type Props = {
  children: React.ReactNode | React.ReactNode[];
  headerImage?: ImageSourcePropType;
  badgeImage?: ImageSourcePropType;
  translateRatio?: number;
  useNativeDriver?: boolean;
};

const PanningScrollView = ({
  headerImage,
  badgeImage,
  children,
  translateRatio = 3,
  useNativeDriver = true,
}: Props) => {
  const yOffset = React.useRef(new Animated.Value(0)).current;

  const translateYMod = yOffset.interpolate({
    inputRange: [0, IMG_HEIGHT / translateRatio],
    outputRange: [0, -IMG_HEIGHT / translateRatio],
    extrapolate: 'clamp',
  });

  const headerScale = yOffset.interpolate({
    inputRange: [-IMG_HEIGHT, 0, IMG_HEIGHT / translateRatio],
    outputRange: [1.15, 1.1, 1.05],
    extrapolate: 'clamp',
  });

  const scale = yOffset.interpolate({
    inputRange: [-IMG_HEIGHT, 0, IMG_HEIGHT / translateRatio],
    outputRange: [1.2, 1, 0.8],
    extrapolate: 'clamp',
  });

  const animatedHeaderStyles = {
    transform: [{ translateY: translateYMod }],
  };

  const animatedHeaderImageStyles = {
    transform: [{ scale: headerScale }],
  };

  const animatedBadgeStyles = {
    transform: [{ scale }],
  };

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: yOffset } } }],
    { useNativeDriver }
  );

  return (
    <View style={{ backgroundColor: 'transparent' }}>
      <Animated.View style={[styles.header, animatedHeaderStyles]}>
        {headerImage ? (
          <Animated.Image
            style={[styles.headerImage, animatedHeaderImageStyles]}
            source={headerImage}
            testID={'image-header'}
          />
        ) : (
          <View style={styles.headerImage} testID={'view-header-placeholder'}/>
        )}
        {badgeImage ? (
          <Animated.View style={[styles.badgeContainer, animatedBadgeStyles]}
          >
            <Image source={badgeImage} style={styles.badgeImage} testID={'image-badge'}/>
          </Animated.View>
        ) : undefined}
        <View style={styles.fakeBorder} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.placeholder} />
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    height: IMG_HEIGHT + FAKE_BORDER_HEIGHT / 2,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    resizeMode: 'cover',
    zIndex: 2,
  },
  headerImage: {
    height: IMG_HEIGHT,
    resizeMode: 'cover',
    zIndex: 2,
  },
  contentContainerStyle: {
    backgroundColor: 'white',
  },
  fakeBorder: {
    width: '100%',
    alignSelf: 'center',
    height: FAKE_BORDER_HEIGHT,
    zIndex: 2,
    top: -FAKE_BORDER_HEIGHT / 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  badgeContainer: {
    position: 'absolute',
    alignSelf: 'center',
    overflow: 'hidden',
    bottom: 8,
    borderRadius: 75,
    padding: 8,
    backgroundColor: 'white',
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 5,
  },
  badgeImage: {
    height: 75,
    width: 75,
  },
});

export default PanningScrollView;
