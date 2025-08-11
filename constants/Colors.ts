/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const flipkartBlue = '#027CD5';
const flipkartYellow = '#FFDE14';
const flipkartBlack = '#353535';
const flipkartGrey = '#EAEAEA';

export const Colors = {
  light: {
    text: flipkartBlack,
    background: '#fff',
    tint: flipkartBlue,
    icon: flipkartBlack,
    tabIconDefault: flipkartGrey,
    tabIconSelected: flipkartBlue,
  },
  dark: {
    text: '#fff',
    background: flipkartBlack,
    tint: flipkartYellow,
    icon: '#fff',
    tabIconDefault: flipkartGrey,
    tabIconSelected: flipkartYellow,
  },
  flipkartBlue,
  flipkartYellow,
  flipkartBlack,
  flipkartGrey,
};
