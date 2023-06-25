import { useState } from "react";
import { TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../util/colors";


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
        <View style={styles.inputContainer}>

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

        </View>
    );    
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24, 
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
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