import { TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                keyboardType="number-pad" 
                maxLength={2} 
                style={styles.numberInput}
                autoCapitalize="none"
                autoCorrect={false}/>

            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );    
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24, 
        backgroundColor: "#72063c",
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold"
    }
});