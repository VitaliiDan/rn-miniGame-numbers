import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants';

export const NumberContainer = ( { text } ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{text}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create( {
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 37
  }
} );