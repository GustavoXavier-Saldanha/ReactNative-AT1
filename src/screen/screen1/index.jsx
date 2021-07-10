import React from 'react';
import { StyleSheet,Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';


export default function Capa() {

  return (
<ScrollView>
     <View style={styles.container}>
         <View style={styles.row}>

         <View>
            <Image style={styles.imgCapa} source={{uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1616773454-51P5EDsAuKL.jpg'}}/>
         </View>

         <View>
            <View>
                <Text style={styles.txtNome}>The Boys</Text>
             </View>

             <View style={styles.iconTxt}>
              <Text style={styles.txtTemp}>Season 2</Text>
              <Entypo  name="chevron-thin-down" color="white" size={13} style={styles.iconChevrolet} />
            </View>
             

             <Text style={styles.txtPrime}>prime</Text>
             <Text style={styles.txtSubPrime}>Season 1-2 included with Prime</Text>
         </View>

         <TouchableOpacity style={styles.mainCaixa}>
         
            <View style={styles.caixa}>
              
                <Entypo  name="controller-play" color="white" size={30} />
                <Text style={styles.txtCaixa}> Episode 1 Watch Now</Text>
              </View>
         
         </TouchableOpacity>

         <View style={styles.iconsGeral}>
          <View style={styles.iconsBtn}>

            <TouchableOpacity style={styles.iconItem}>
            <View style={styles.iconBord}>
              <AntDesign name="plus" color="#d5e1ed" size={30} style={styles.iconArea}/>
            </View>  
              <Text style={styles.txtIcon}>WatchList</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconItem}>
            <View style={styles.iconBord}>
              <AntDesign name="check" color="#d5e1ed" size={30} style={styles.iconArea}/>
            </View>
              <Text style={styles.txtIcon}>Complete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconItem}>
              <View style={styles.iconBord}>
              <EvilIcons name="share-google" color="#d5e1ed" size={30} style={styles.iconArea}/>
              </View>
              <Text style={styles.txtIcon}>Share</Text>
            </TouchableOpacity>

          </View>
         </View>
         
          <View style={styles.mainResume}>
          <View style={styles.txtResumeMain}>
            <Text style={styles.txtResume}>In a more intense second season, Butcher, Hughie and the team rebound from their first season losses. Fleeing the law, they struggle to fight Superheroes. As Vought, the company that manages the heroes, panics at the threat of Supervillains, and a new heroine, Stormfront, shakes the company and challenges an already unstable Captain Homeland.</Text>
          </View>
          </View>
         </View>
         
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

    imgCapa: {
      width: '100%',
      height: 250,
    
    },
  txtNome:{
      marginTop: 5,
      fontSize: 28,
      color: '#fff',
      marginLeft: 20,
  },

  txtTemp:{
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 15,
    fontSize: 14,
    color: '#fff',
    marginRight: 8
},

txtPrime:{
  color: '#00A8E1',
  fontSize: 22,
  marginLeft: 20,
  fontWeight: '600'
},

txtSubPrime:{
  fontSize: 13,
  color: '#fff',
  marginLeft: 20,
  marginBottom: 10
},

mainCaixa:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

caixa:{
  backgroundColor: '#007ea8',
  width: '90%',
  height: 50,
  borderRadius: 3,
  flexDirection: 'row',
  alignContent: 'space-between',
  alignItems: 'center',
},

txtCaixa:{
  color: '#fff',
  fontSize: 18,
  fontWeight: '600',
},
iconBord:{
  borderColor: '#37475A',
  borderWidth: 1,
  borderRadius: 50
},

iconArea:{
  padding: 8
},

txtIcon:{
color: '#ffffe6',
fontSize: 13,
fontWeight: '100'
},

iconTxt:{
  flexDirection: 'row',
  alignContent: 'space-between',
  alignItems: 'center',
},

iconsBtn:{
  marginTop: 20,
  flexDirection: 'row',
  alignContent: 'space-between',
  width: '70%',

},

iconItem:{
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 200,
},

iconsGeral:{
  alignItems: 'center'
},

mainResume:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15
},

txtResumeMain:{
  width: '90%',
  alignItems: 'center',
},

txtResume:{
  color: '#fff',
  fontSize: 12,
  marginBottom: 30
}


  });

