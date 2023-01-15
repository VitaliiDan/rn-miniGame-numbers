import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrimaryButton, PrimaryTitle, Card, SecondaryTitle } from '../components/ui';
import { Colors, CustomCss } from '../constants';

export const StartGameScr = ( { startGameHandler } ) => {
  const [enteredNumber, setEnteredNumber] = useState( '' );

  const numberInputHandler = ( value ) => setEnteredNumber( value.replace( /[^0-9]/g, '' ) );

  const resetInputValueHandler = () => setEnteredNumber( '' );

  const confirmInputValueHandler = () => {
    const chosenNumber = parseInt( enteredNumber );
    if (isNaN( chosenNumber ) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputValueHandler }]
      );
      setEnteredNumber( '' );
    } else {
      startGameHandler( chosenNumber );
    }
  };

  return (
    <View style={styles.screen}>
      <PrimaryTitle text="Guess my number" />
      <Card>
        <SecondaryTitle title='Enter a number'/>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType={'number-pad'}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputValueHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputValueHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    ...CustomCss.safePadding,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  buttonContainer: {
    flex: 1
  }
} );