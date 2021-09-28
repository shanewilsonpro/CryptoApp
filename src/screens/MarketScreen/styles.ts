import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    image: {
        height: 175,
        resizeMode: "contain",
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;