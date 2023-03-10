import { Text, StyleSheet } from 'react-native';

export const PrimaryTitle = ({text}) => {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 16,
    maxWidth: '80%',
    alignSelf: 'center',
  }
})