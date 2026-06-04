import { StyleSheet, Text, View, TextInput, FlatList, Pressable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {Snackbar} from 'react-native-snackbar';
import {currencyByRupee} from './constants'
import CurrencyBtn from './CurrencyBtn';

const CurrencyConverter = () => {
    const [inputValue, setInputValue] = useState('')
    const [resultValue, setResultValue] = useState('')
    const [targetCurrency, setTargetCurrency] = useState('')

    const buttonPressed = (targetValue: Currency) =>{
        if (!inputValue) {
            return Snackbar.show({
                text: 'Enter a value to convert',
                backgroundColor: '#EA7773',
                textColor:'#000000'
            })
        }
        
        const inputAmount = parseFloat(inputValue)
        if(!isNaN(inputAmount)){
            const convertedValue = inputAmount * targetValue.value
            const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
            setResultValue(result)
            setTargetCurrency(targetValue.name)
        }
        else{
             return Snackbar.show({
                text: ' Not a valid number to convert',
                backgroundColor: '#F4BE2C',
                textColor:'#000000'
            })
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>   
           <View style={styles.rupeeContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput 
            style={styles.inputBox}
            maxLength={14}
            value={inputValue}
            clearButtonMode='always' //only for ios
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in rupees'
            placeholderTextColor="#666"
            />
           </View>
           {resultValue ? (
             <View style={styles.resultContainer}>
               <Text style={styles.resultText}>
                 {resultValue}
               </Text>

               <Text style={styles.currencyText}>
                 {targetCurrency}
               </Text>

               <TouchableOpacity
                 onPress={() => {
                   setResultValue('')
                   setTargetCurrency('')
                 }}>
                 <Text style={styles.clearText}>Clear</Text>
               </TouchableOpacity>
             </View>
           ): null}
        </View>
        <View style={styles.bottomContainer}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
                <Pressable style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}>
                    <CurrencyBtn {...item}/>
                </Pressable>
            )}
            />
      </View>
      </View>
  )
}

export default CurrencyConverter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContainer: {
    marginTop: 30,
  },
  inputBox: {
  flex: 1,
  fontSize: 18,
},
  rupeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  rupee: {
    fontSize: 24,
    marginRight: 10,
    color: '#000',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
 clearText: {
  marginTop: 10,
  fontSize: 16,
  fontWeight: '600',
  color: '#F4BE2C',
}, 
  currencyText: {
    fontSize: 18,
    color: '#cbd5e1',
    marginTop: 4,
    overflow: 'hidden',
  },
  bottomContainer: {
    flex: 1,
    marginTop: 30,
  },
  button: {
  margin: 8,
  minHeight: 100,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: 12,
  elevation: 3, // Android shadow
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 3,
},

selected: {
  backgroundColor: '#4f46e5',
  borderWidth: 2,
  borderColor: '#312e81',
},
})