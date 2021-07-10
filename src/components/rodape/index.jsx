import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Entypo, Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';


export default function Rodape() {

  return (

     <View style={styles.container}>
         <View style={styles.iconsBtn}>

                <TouchableOpacity style={styles.iconItem}>
                    <View style={styles.iconBord}>
                        <Feather name="home" color="#829fbf" size={25} style={styles.iconArea}/>
                    </View>  
                    <Text style={styles.txtIcon}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconItem}>
                    <View style={styles.iconBord}>
                        <SimpleLineIcons name="bag" color="#829fbf" size={25} style={styles.iconArea}/>
                    </View>
                    <Text style={styles.txtIcon}>Store</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconItem}>
                    <View style={styles.iconBord}>
                        <Entypo name="list" color="#829fbf" size={25} style={styles.iconArea}/>
                    </View>
                        <Text style={styles.txtIcon}>Channels</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconItem}>
                    <View style={styles.iconBord}>
                        <Feather name="search" color="#829fbf" size={25} style={styles.iconArea}/>
                    </View>
                        <Text style={styles.txtIcon}>Find</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconItem}>
                    <View style={styles.iconBord}>
                        <Ionicons name="person-circle" color="#829fbf" size={25} style={styles.iconArea}/>
                    </View>
                        <Text style={styles.txtIcon}>My Stuff</Text>
                </TouchableOpacity>

            </View>
         </View>

  );
}



  const styles = StyleSheet.create({
    container:{
     backgroundColor: '#000000', 
     width: '100%',
     height: '20%'      
    },

    iconsBtn:{
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'space-between',
      
      },
      
      iconItem:{
        alignItems: 'center',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 200,
      },

      txtIcon:{
          color: '#fff',
          fontSize:12
      }


  });