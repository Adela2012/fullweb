import * as React from 'react'
import { Text, View, Dimensions, Switch, StyleSheet, TouchableOpacity } from 'react-native'
const {width} = Dimensions.get('window')
const cellWidth = width * 0.3
export default function GridScreen() {
    const [isSingle, setIsSingle] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(-1)
    const [selectedMulti, setSelectedMulti] = React.useState({})
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>单选</Text>
                <Switch value={isSingle} onValueChange={setIsSingle} />
            </View>
            <View style={styles.innerContainer}>
                {
                    isSingle ? [...new Array(9)].map((_, i) => {
                        return (
                            <TouchableOpacity key={i}
                                onPress={()  => setSelectedIndex(i)}
                                style={[ styles.cell, selectedIndex === i && {backgroundColor: 'green'} ]} />
                        )
                    }) : [...new Array(9)].map((_, i) => {
                        return (
                            <TouchableOpacity key={i}
                                onPress={() => setSelectedMulti({...selectedMulti, [i]: !selectedMulti[i]})}
                                style={[ styles.cell, selectedMulti[i] && {backgroundColor: 'green'} ]} />
                        )
                    })
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 0,
    },
    innerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 0,
        marginTop: 10,
    },
    cell: {
        width: cellWidth,
        height: cellWidth,
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid',
    }
  });


  