import React from 'react';
import { StyleSheet,Image, View, TouchableOpacity } from 'react-native'

export default function Cabecalho() {

  return (

    <View style={styles.container}>
        <TouchableOpacity style={styles.logo}>
          <Image source={require('./PrimeVideoOri.png')} style={styles.imagem}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   backgroundColor: '#121921', 
   width: '100%',
   height: 50,
   alignItems: 'center',    
  },
  imagem:{
    width: '65%',
    height: '65%',
    alignItems: 'center'
  },

  logo:{
    width: 100,
    height:35,
    marginTop: 15,
    alignItems: 'center'
  }
})