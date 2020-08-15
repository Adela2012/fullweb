import * as React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { navigationRef } from '../utils/navigationService';
import { Text, View, Button, TextInput } from 'react-native';

export type StackParamList = {
  Home: undefined,
  Detail: {value: string}
}

function HomeScreen() {
  const navigation = useNavigation()
  const [returnValue, setReturnValue] = React.useState('')
  return (
    <View>
      <Text>当前用户名: {returnValue}</Text>
      <Button title="修改用户名" onPress={() => {
          navigation.navigate('Detail', {
            value: 'from home',
            callback: ret => setReturnValue(ret)
          })
      }}></Button>
    </View>
  )
}

function DetailScreen({route, navigation}) {
  const [currentUserName, setCurrentUserName] = React.useState('')
  return (
    <View>
      <Text>Detail Screen: {route.params.value}</Text>
      <TextInput value={currentUserName} onChangeText={setCurrentUserName}></TextInput>
      <Button title="确定" onPress={() => {
          navigation.goBack();
          route.params.callback(currentUserName)
      }}></Button>
    </View>
  )
}
const Stack = createStackNavigator<StackParamList>();

export default function RootScreen() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          // options={{headerShown: false}}
          component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
