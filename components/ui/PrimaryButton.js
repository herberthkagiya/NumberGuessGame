import { 
    View, 
    Text, 
    StyleSheet, 
    Pressable } from "react-native";
    
import Colors from "../../util/colors";


function PrimaryButton({children, onPress}){
    function pressHandler(){
        onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed 
                    ? [styles.pressed, styles.buttonInnerContainer] 
                    : styles.buttonInnerContainer}
                onPress={pressHandler} 
                android_ripple={{color: Colors.primary600}}>

                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 13,
        paddingHorizontal: 16,
        elevation: 2,
    },
    
    buttonText: {
        color: "white",
        textAlign: 'center'
    },

    pressed: {
        opacity: 0.75
    }
});