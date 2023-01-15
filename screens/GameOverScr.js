import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { PrimaryTitle, PrimaryButton, Card, SecondaryTitle } from '../components/ui';
import { Colors, CustomCss } from '../constants';

export const GameOverScr = ({userNumber, tryCount, restartGameHandler}) => {
  return (
    <View style={styles.screen}>
      <PrimaryTitle text='Game Over!' />
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/foreground.png')}
          style={styles.image}
          objectFit='cover'
        />
      </View>
      <Card style={{marginTop: 16}}>
        <SecondaryTitle title={`Number of rounds: ${tryCount}`} style={styles.additionalMargin}/>
        <SecondaryTitle title={`Number was: ${userNumber}`} style={styles.additionalMargin}/>
        <PrimaryButton onPress={restartGameHandler }>NEW GAME</PrimaryButton>
      </Card>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    ...CustomCss.safePadding,
  },
  additionalMargin: {
    marginBottom: 16
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
} );