import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';






const PreventionScreen = ({ navigation }) => {
  
const NextPage=()=>{
    {navigation.navigate("Home")}
}



  return (
    <View style={styles.container}>
      <View>
        <Icon name="chevron-left" size={26} style={styles.icon1} />
      </View>

      <View>
        <Icon name="menu" size={26} style={styles.icon2} />
      </View>
      <br />
      <br />

      <View>
        <Text style={{ fontSize: 16 }}>Covid-19</Text>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Prevention</Text>
      </View>
    <br/>
    <br/>
      <View>

        <Icon name="play-circle-outline"  size={40} style={styles.icon3}/>
    
      </View>

      <View>
       <Text style={{paddingLeft: 30, color:'white', fontSize: 16,}}>
         Important :
       </Text>
      
      </View>
       <br/>
   <View style={[styles.container1, styles.shadowProp]}>
   
          <Image
            source={{
              uri:
                'https://img.icons8.com/external-justicon-flat-justicon/2x/external-washing-hand-virus-transmission-justicon-flat-justicon-1.png',
            }}
            style={styles.image}
          />
       <Text style={{paddingLeft: 70, fontWeight: 700, color: 'white', fontSize:20,}}>HandWash</Text>
       <br/>

        <Text style={{fontSize: 14, paddingLeft: 12, fontWeight: 700}}>Handwashing can help prevent illness.  It reduces the spread of diarrhea and respiratory illness so you can stay healthy.</Text>
       
   </View>

   

   
          <br/>
          <br/>
       
    
  

   
    <View>

             <TouchableOpacity  onPress={()=>NextPage()}  style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'white', paddingLeft: 10, paddingTop: 5,   marginTop: -50, borderWidth: 3, borderColor: '#f08080', marginLeft: 60}}>
        <Text style={{fontWeight: 700,color:'#cd5c5c'}}>Go to home page</Text>
      </TouchableOpacity>
        
        
        
        
        </View>


    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'row',
    paddingLeft: 30,
    borderRadius: 20,
    paddingTop: 46,
    backgroundColor: '#CD5C5C',
  },

  icon2: {
    paddingLeft: 240,
    paddingTop: -0,
    marginTop: -25,
  },

  icon1: {
    paddingRight: 10,
    paddingTop: -1,
  },


  icon3:{
    paddingLeft: 230,
    paddingTop: -16,
    marginTop: -85,
  },


  container1:{
    width: 260,
    height: 270,
    backgroundColor: "#B89852",
    borderRadius: 24,
    marginLeft: 7,
    borderColor: '#f08080',
    borderWidth: 3,
  

  },

    shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

   
    image: {
    width: 120,
    height: 120,
    marginTop: 15,
    borderRadius: 15,
    marginLeft: 60,
  },

});

export default PreventionScreen;
