import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'

export default function MenuTela() {


  return (
       
    <View style={styles.opcaoGeral}>
    <View style={styles.areaOpcao}>

      <TouchableOpacity style={styles.cxOpcao}>
        <Text style={styles.opcao}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cxOpcao}>
        <Text style={styles.opcao}>Originals</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cxOpcao}>
        <Text style={styles.opcao}>TV</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cxOpcao}>
        <Text style={styles.opcao}>Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cxOpcao}>
        <Text style={styles.opcao}>Kids</Text>
      </TouchableOpacity>
    </View>
   </View>
    
    );
  }
  
  const styles = StyleSheet.create({

    opcao:{
      color: '#8aa9cf',
      fontSize: 13,
      fontWeight: '6 00'
      },
      
      iconTxt:{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
      },
      
      areaOpcao:{
        marginTop: 15,
        flexDirection: 'row',
        alignContent: 'space-between',
        width: '90%',
      
      },
      
      cxOpcao:{
        alignItems: 'center',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 200,
      },
      
      opcaoGeral:{
        alignItems: 'center',
        marginBottom: 15
      },
    })