import { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button} from 'react-native';

export default function App() {
  const boxOpacityAnimationValue = useRef(new Animated.Value(0)).current;

  const handleFadeInBox = () =>{
    Animated.timing(boxOpacityAnimationValue, {
      duration : 1000,
      toValue : 1,
      delay : 200,
      useNativeDriver: true
    }).start()
  }

  const opacityStyle = {
    opacity : boxOpacityAnimationValue
  }

  const handleFadeOutBox = () =>{
    Animated.timing(boxOpacityAnimationValue, {
      duration : 500,
      toValue : 0,
      useNativeDriver: true
    }).start()
  }

  const handleCallback = () =>{
    Animated.timing(boxOpacityAnimationValue, {
      duration : 500,
      toValue : 1,
      useNativeDriver: true
    }).start(()=>{
      // setvalue = 0 to 1
      boxOpacityAnimationValue.setValue(0.5)
    })
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.Box,opacityStyle]}></Animated.View>
      <Button onPress={handleFadeInBox} color={"black"} title="Fade this red box In"/>
      <Button onPress={handleFadeOutBox} color={"green"} title="Fade this red box out"/>
      <Button onPress={handleCallback} color={"yellow"} title="handle callback of timing method"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box:{
    width:200,
    height:200,
    backgroundColor:"red",
    marginBottom:40
  }
});
