import { View, Text, StyleSheet, SafeAreaView, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons"

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomNumberBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomNumberBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){

    const initialPhoneGuess = generateRandomNumberBetween(1, 100, userNumber);
    const [currentPhoneGuess, setCurrentPhoneGuess] = useState(initialPhoneGuess);
    const [guessRounds, setGuessRounds] = useState([initialPhoneGuess]);


    useEffect(()=> {
        if (currentPhoneGuess == userNumber) {
            onGameOver(guessRoundsListLength);
        }
    }, [currentPhoneGuess, userNumber, onGameOver]);

    useEffect(() =>{
      minBoundary = 1;
      maxBoundary = 100;
    }, [])


    function nextGuessHandler(direction) {
        // direction => 'lower', 'greater'
        if (
          (direction === 'lower' && currentPhoneGuess < userNumber) ||
          (direction === 'greater' && currentPhoneGuess > userNumber)
        ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' },
          ]);
          return;
        }
    
        if (direction === 'lower') {
          maxBoundary = currentPhoneGuess;
        } else {
          minBoundary = currentPhoneGuess + 1;
        }
    
        const newRndNumber = generateRandomNumberBetween(
          minBoundary,
          maxBoundary,
          currentPhoneGuess
        );

        console.log(minBoundary, maxBoundary, newRndNumber);

        setCurrentPhoneGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
      }

    const guessRoundsListLength = guessRounds.length;  

    return (


        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>

            <NumberContainer>{currentPhoneGuess}</NumberContainer>

            <Card>
              <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>

              <View style={styles.buttonsContainer}>
                
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons 
                      name="md-remove" 
                      size={24}
                      color={"white"}/>
                  </PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons 
                      name="md-add"
                      size={24}
                      color={"white"}/>
                  </PrimaryButton>
                </View>

              </View>

            </Card>

            <View style={styles.logListContainer}>
              <FlatList 
                data={guessRounds}
                renderItem={ (round) =>
                  <GuessLogItem roundNumber={guessRoundsListLength - round.index} guess={round.item}/>
                }
                keyExtractor={(round) => round} />
            </View>    
          
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },

    instructionText: {
      marginBottom: 12
    },

    buttonsContainer: {
      flexDirection: "row",
    },

    buttonContainer: {
      flex: 1
    },

    logListContainer: {
      flex: 1,
      padding: 16
    }
});