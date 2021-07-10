import React from 'react';
import { StyleSheet,View, ScrollView} from 'react-native';
import Linha1 from '../../components/home/linha1'
import Linha2 from '../../components/home/linha2'
import Linha3 from '../../components/home/linha3'
import Linha4 from '../../components/home/linha4'
import Cabecalho from '../../components/home/cabecalho'
import Destaque from '../../components/home/destaque'
import MenuTela from '../../components/home/opcoes'

export default function Home() {

  return (
<ScrollView>
    <View style={styles.container}>

        <Cabecalho />
        <MenuTela/>
        <Destaque/>
        <Linha1 />
        <Linha2 />
        <Linha4 />
        <Linha3 />
        
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
     backgroundColor: '#121921', 
     width: '100%',
     height: '100%'     
    },


})