import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton"

function generateRandomNumberBetween(min, max, exclude){
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === exclude){
        return generateRandomNumberBetween(min, max, exclude);
    }
    else{
        return randomNumber;    
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}){

    const initialPhoneGuess = generateRandomNumberBetween(minBoundary, maxBoundary, userNumber);
    const [currentPhoneGuess, setCurrentPhoneGuess] = useState(initialPhoneGuess);

    function nextGuessHandler(direction){
        if(
            (direction === "lower" && currentPhoneGuess < userNumber) ||
            (direction === "greater" && currentPhoneGuess > userNumber)
        ){
            Alert.alert(
                "Don't lie!", 
                "You know that this is wrong...",
                [{text: "Sorry!", style: "cancel"}]
            )
            return;
        }


        if(direction === "lower"){
            maxBoundary = currentPhoneGuess;
        }
        else{
            minBoundary = currentPhoneGuess + 1;
        }

        const newPhoneGuess = generateRandomNumberBetween(minBoundary, maxBoundary, currentPhoneGuess); 

        setCurrentPhoneGuess(newPhoneGuess)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>

            <NumberContainer>{initialPhoneGuess}</NumberContainer>

            <View>
                <Text>Higher or lower</Text>

                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+ </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                </View>

            </View>

            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,

    }
    
});