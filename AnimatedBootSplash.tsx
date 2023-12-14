import { useState } from "react";
import { ActivityIndicator, Animated, Dimensions } from "react-native";
import BootSplash from "react-native-bootsplash";
import { Text } from "react-native-paper";

type Props = {
  onAnimationEnd: () => void;
};

export const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const { container, logo /*, brand */ } = BootSplash.useHideAnimation({
    manifest: require("./assets/bootsplash_manifest.json"),

    logo: require("./assets/images/logo.png"),
    // darkLogo: require("../assets/bootsplash_dark_logo.png"),
    // brand: require("../assets/bootsplash_brand.png"),
    // darkBrand: require("../assets/bootsplash_dark_brand.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const { height } = Dimensions.get("window");

      Animated.stagger(250, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Animated.Image
        {...logo}
        style={[logo.style, { transform: [{ translateY }] }]}
      />
      <Text variant="titleMedium">Kings CLub</Text>
      <ActivityIndicator size="large" style={{position: 'absolute', bottom: 80}}/>
      <Text  style={{position: 'absolute', bottom: 60}} >Loading...</Text>
      {/* <Animated.Image {...brand} style={[brand.style, { opacity }]} /> */}
    </Animated.View>
  );
};
