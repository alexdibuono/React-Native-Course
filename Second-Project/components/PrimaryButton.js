import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) =>
                pressed
                    ? [styles.buttonInnerContainer, styles.pressedStyle]
                    : styles.buttonInnerContainer
                }>
                <Text>{props.children}</Text>
           </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4
    },
    buttonInnerContainer: {
        borderRadius: 17,
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    pressedStyle: {
        opacity: 0.75
    }
})