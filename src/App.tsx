import { StyleSheet, View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import DiceRoll from './components/DiceRoll'
import { SafeAreaView } from 'react-native-safe-area-context'
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark'
    return (
      <View style={styles.mainContainer}>
      <StatusBar
           backgroundColor={isDarkMode ? '#000' : '#fff'}
           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />         
      <SafeAreaView  style={styles.container} >
         {/* <DiceRoll />
              <Text style={styles.rollText}>Roll the Dice 🎲</Text> */}
             
         <CurrencyConverter/>
        </SafeAreaView>
      </View>
    )
}
const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  container:{  
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
},
  rollText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
})
export default App