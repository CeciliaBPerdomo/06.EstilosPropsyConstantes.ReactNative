import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/global/colors'

const Headers = ({ title}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                {title}
            </Text>

        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 30
    }
})