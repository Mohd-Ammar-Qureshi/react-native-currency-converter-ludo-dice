import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {JSX, PropsWithChildren} from 'react'

type CurrencyBtnProps = PropsWithChildren<{
    name: string;
    value: number;
    flag: string;
    symbol: string;
}>

const CurrencyBtn = (props: CurrencyBtnProps):JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}<Text style={{fontWeight: 'bold'}}> {props.symbol}</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
   buttonContainer: {
        width: 90,
        height: 90,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
},
    flag:{
        fontSize: 20,
        color: '#fff',
        marginBottom: 4
    },
    country:{
         fontSize: 12,
        color: '#2d3436',
        marginBottom: 4
    },

})

export default CurrencyBtn
