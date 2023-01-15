import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants';

export const ListItem = ({listItem, index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{index + 1}</Text>
      <Text style={styles.text}>{listItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary700,
  },
  text: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary700,
    fontSize: 16,
  }
});