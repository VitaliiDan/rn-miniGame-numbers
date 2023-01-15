import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton, PrimaryTitle, Card, SecondaryTitle } from '../components/ui';
import { NumberContainer } from '../components/game/NumberContainer';
import { randomNumberGenerator } from '../utils/randomNumberGenerator';
import { Colors, CustomCss } from '../constants';
import { ListItem } from '../components/ui/ListItem';

let minBoundary = 1;
let maxBoundary = 100;

export const GameScr = ( { userNumber, gameOverHandler, setRoundsCount } ) => {
  const initialGuess = randomNumberGenerator( 1, 100, userNumber );
  const [currentGuess, setCurrentGuess] = useState( initialGuess );
  const [answersList, setAnswersList] = useState( [initialGuess] );

  useEffect( () => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [] );

  useEffect( () => {
    if (currentGuess === userNumber) {
      setRoundsCount( answersList.length );
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler] );

  const nextGuessNumber = ( direction ) => {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert( 'Don\'t lie!', 'You known that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }] );
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = randomNumberGenerator( minBoundary, maxBoundary, currentGuess );
    setCurrentGuess( newRandomNumber );
    setAnswersList( prev => [...prev, newRandomNumber] );
  };

  return (
    <View style={styles.screen}>
      <PrimaryTitle text="Opponent's Guess" />
      <NumberContainer text={currentGuess} />
      <Card>
        <SecondaryTitle title='Higher or lower?' />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessNumber( 'lower' )}>
              <Ionicons name='md-remove' size={24} color={Colors.accent500} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessNumber( 'greater' )}>
              <Ionicons name='md-add' size={24} color={Colors.accent500} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <Card style={styles.listContainer}>
        <SecondaryTitle title='Guesses list:' style={{ color: Colors.primary800 }} />
        <FlatList
          data={answersList}
          renderItem={itemData => <ListItem listItem={itemData.item} index={itemData.index} />}
          keyExtractor={item => item}
          style={styles.list}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    ...CustomCss.safePadding
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  list: {
    width: '100%',
  }
} );