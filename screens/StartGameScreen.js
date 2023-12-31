import { useState } from "react";
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../util/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"


function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');


    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                "Invalid number!", 
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "Okay", 
                        style: "destructive", 
                        onPress: resetInputHandler
                    }
                ]
            )
            
            return;
        }
        
        onPickNumber(enteredNumber)
    }

    function resetInputHandler(){
        setEnteredNumber("")
    }

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="padding">
                <View style={styles.rootContainer}>
                    <Title>Guess My Number</Title>

                    <Card>

                        <InstructionText>Enter a number</InstructionText>

                        <TextInput 
                            keyboardType="number-pad" 
                            maxLength={2} 
                            style={styles.numberInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler}/>

                        <View style={styles.buttonsContainer}>

                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={setEnteredNumber}>Reset</PrimaryButton>
                            </View>

                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>

                        </View>

                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>    
    );    
}

export default StartGameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        textAlign: "center",
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500 ,
        marginVertical: 8,
        fontWeight: "bold"
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    buttonContainer: {
        flex: 1
    }
});