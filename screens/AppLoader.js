import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Colors } from '../constants';

export const AppLoader = () => {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size='large' color={Colors.accent500} />
    </View>
  );
};

const styles = StyleSheet.create( {
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});