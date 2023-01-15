import { Platform } from 'react-native';

export const CustomCss = {
  safePadding: {
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 50 : 16
  }
}