import { View, Text, StyleSheet } from "react-native";

function PrimaryButton({children}){
    return (
        <View style={styles.buttonContainer}>
            <Text>{children}</Text>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        color: "blue"
    }
});