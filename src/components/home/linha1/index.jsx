import React from 'react';
import { StyleSheet,Image, Text, View, ScrollView, TouchableOpacity} from 'react-native'

export default function Linha1() {

  return (
<View style={styles.container}>
    <View style={styles.row}>

        <View >
        <Text style={styles.subTitulo}>Included with Prime</Text>
            <Text style={styles.titulo}>Amazon Originals</Text>      
        </View>
    
        <View style={styles.filmes}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.fileira}>
                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/SemRemoco.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/jack-ryan2.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/The-Tomorrow-War2.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/SemRemoco.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/jack-ryan2.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/The-Tomorrow-War2.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/SemRemoco.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/jack-ryan2.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity>
                        <Image source={require('../../img-linha1/The-Tomorrow-War2.jpg')} style={styles.imagem}/>
                    </TouchableOpacity>
                </View>
            

            </ScrollView>
        </View >

      


    </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
     backgroundColor: '#121921', 
     width: '100%',
     height: 192      
    },

    row:{
        marginLeft: 15
    },

    filmes:{
        marginTop:5
    },

    imagem: {
      width: '100%',
      height: 130,
      borderRadius:6
    },

    card:{
        width: 185,
        height: 140,
        position: 'relative',
        marginRight: 10
    },

    subTitulo:{
        color: '#00A8E1',
        fontSize: 12
    },

    titulo:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    }
})