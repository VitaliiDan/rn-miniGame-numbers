import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';

export const Card = ({children, style}) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    marginTop: 32,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // shadow properties only work on Android
    elevation: 4,
    // shadow properties only work on iOS
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
})