import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants';

export const SecondaryTitle = ({title, style}) => <Text style={[styles.text, style]}>{title}</Text>

const styles = StyleSheet.create( {
  text: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  }
});