import { View, StyleSheet} from "react-native";
import Colors from "../../util/colors";


function Card({children}){
    return (
        <View style={styles.cardContainer}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        padding: 16,
        marginHorizontal: 24, 
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
});