import * as React from 'react'
import { Text, View, Dimensions, Switch, Linking, StyleSheet, TouchableOpacity } from 'react-native'
const {width} = Dimensions.get('window')
const cellWidth = width * 0.3
export default function GridScreen() {
    const [msg, setMsg] = React.useState('1')
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                Linking.openURL('sms:10086').then(s => {
                    console.log(s)
                    setMsg(s)
                })
            }} >
                <Text>click</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    container: {
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 0,
    }
  });


  