import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { StartGameScr, GameScr, GameOverScr } from './screens';
import { Colors } from './constants';
import { AppLoader } from './screens/AppLoader';

export default function App() {
  const [fontsLoaded] = useFonts( {
    'open-sans': require( './assets/fonts/OpenSans-Regular.ttf' ),
    'open-sans-bold': require( './assets/fonts/OpenSans-Bold.ttf' )
  } );


  const [userNumber, setUserNumber] = useState( null );
  const [gameOver, setGameOver] = useState( false );
  const [roundsCount, setRoundsCount] = useState( 0 );

  const startGameHandler = ( selectedNumber ) => {
    setUserNumber( selectedNumber );
    setGameOver( false );
  };

  const gameOverHandler = () => setGameOver( true );

  const resetGameHandler = () => {
    setUserNumber( null );
    setGameOver( false );
    setRoundsCount( 0 );
  };

  let screen = <StartGameScr startGameHandler={startGameHandler} />;

  if (!fontsLoaded) {
    screen = <AppLoader/>;
  }

  if (userNumber) {
    screen = <GameScr
      userNumber={userNumber}
      gameOverHandler={gameOverHandler}
      setRoundsCount={setRoundsCount}
    />;
  }

  if (gameOver) {
    screen =
      <GameOverScr
        userNumber={userNumber}
        tryCount={roundsCount}
        restartGameHandler={resetGameHandler}
      />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require( './assets/images/background.png' )}
        resizeMode='cover'
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create( {
  rootContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
} );
