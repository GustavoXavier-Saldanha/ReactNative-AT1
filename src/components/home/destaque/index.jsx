import React from 'react';
import { StyleSheet,Image, View} from 'react-native'

export default function Destaque() {

  return (

    <View style={styles.container}>

          <Image source={require('./destaque.jpg')} style={styles.imagem}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   backgroundColor: '#000', 
   width: '100%',
   height: 200,
   marginBottom: 10      
  },
  imagem:{
    width: '100%',
    height: '100%'
  }
})