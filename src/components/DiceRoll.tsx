import { StyleSheet, View, ImageSourcePropType, Image, Pressable } from 'react-native'
import React, { JSX, useState } from 'react'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { PropsWithChildren } from 'react'
import dice1 from '../../assets/dice1.png'
import dice2 from '../../assets/dice2.png'
import dice3 from '../../assets/dice3.png'
import dice4 from '../../assets/dice4.png'
import dice5 from '../../assets/dice5.png'
import dice6 from '../../assets/dice6.png'
import { Animated } from 'react-native';
import { useRef } from 'react';
const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>
const Dice = ({imageUrl}: DiceProps):JSX.Element =>{
    return(
        <View>
            <Image source={imageUrl} style={{ width: 200, height: 200 }} />
        </View>
    )
}

const DiceRoll = ():JSX.Element => {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(dice1)
    const rotateValue = useRef(new Animated.Value(0)).current;

    const rollDiceOnTap = () => {
        let randomNumber =  Math.floor(Math.random()*6)+1;
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start(() => {
          rotateValue.setValue(0);
        });
        switch(randomNumber){
            case 1:
                setDiceImage(dice1)
                break;
            case 2:
                setDiceImage(dice2)
                break;
            case 3:
                setDiceImage(dice3)
                break;
            case 4:
                setDiceImage(dice4)
                break;
            case 5:
                setDiceImage(dice5)
                break;
            case 6:
                setDiceImage(dice6)
                break;
            default:setDiceImage(dice1)

                break;
        }
     ReactNativeHapticFeedback.trigger('impactLight', options);
    }
    const spin = rotateValue.interpolate({
    inputRange: [0, 2],
    outputRange: ['0deg', '1020deg'],
});
  return (
  <Animated.View  style={[
  styles.container,
  {
transform: [
  { rotate: spin },
  { translateY: 1},
  { scale: 1.1 },
]  },
]}>
    <Pressable onPress={rollDiceOnTap}  style={styles.diceContainer}>
      <Dice imageUrl={diceImage} />
    </Pressable>
    </Animated.View>
  )
}

export default DiceRoll

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceContainer: {
}
})