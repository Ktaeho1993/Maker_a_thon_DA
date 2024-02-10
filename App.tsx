import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {StyleSheet} from 'react-native'
import React from 'react'
import Main from './src/pages/MainPage'
import FirstPage from './src/pages/FirstPage'
import Join from './src/pages/JoinMembershop'
import Guideline from './src/pages/Guideline'
import MyInformation from './src/pages/MyInformation'
import EditInformation from './src/pages/EditInformation'

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(245,245,245)',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Main" component={Main}
          options={{
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: 'rgb(13,37,81)',},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
          },
        }} />
        <Stack.Screen name="Login" component={FirstPage}
          options={{
            headerShown: false,         
        }} />
        <Stack.Screen name="Join" component={Join}
          options={{title: '회원가입',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'rgb(13,37,81)',},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          }
        }} />
        <Stack.Screen name="Guideline" component={Guideline}
          options={{title: '가이드라인',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'rgb(13,37,81)',},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }} />
        <Stack.Screen name="MyInformation" component={MyInformation}
          options={{title: '내 정보',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'rgb(13,37,81)',},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }} />
        <Stack.Screen name="EditInformation" component={EditInformation}
          options={{title: '정보 수정',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'rgb(13,37,81)',},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;