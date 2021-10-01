import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PreventionScreen from './PreventionScreen';








const SymptomsScreen = ({ navigation }) => {

  const NextPage=()=>{
    {navigation.navigate("Prevention")}
}


  return (
    <View style={styles.container}>
      <View>
        <Icon style={styles.icon2} name="menu" size={26} />
      </View>

      <View>
        <Icon style={styles.icon} name="search" size={26} />
      </View>
      <br />
    
      <View>
        <Text style={{fontSize: 16, fontWeight: 400, color: 'white'}}>Covid-19</Text>
        <Text style={{fontSize: 18, fontWeight: 700, color: 'white'}}>Symptoms</Text>
      </View>

      
        <View style={{
          alignSelf: 'stretch',
          borderBottomWidth: 4,
          borderBottomColor: '#000',
          marginTop: 10,
          marginBottom: 10,
          width: 280,
        }} />

        
        <Text style={styles.text}> These symptoms can appear 2-14 days after exposure</Text>
        <View style={styles.container2}>
        
        </View>
        <br/>
         <br/>
          <br/>
    
   <View style={{marginTop: 30,}}>
    <View style={[styles.container3, styles.shadowProp]}>
        <Text style={{fontWeight: 700, fontSize: 16}}>Cold</Text>
        
        <Text style={{fontSize: 12,}}>The severity of COVID-19 symptoms can range from very mild to severe.</Text>
             <Image
            source={{
              uri:
                'https://img.icons8.com/external-justicon-flat-justicon/2x/external-woman-avatar-and-emotion-justicon-flat-justicon-12.png',
            }}
            style={styles.image3}
          />
    
    </View>

      <View style={[styles.container4, styles.shadowProp]}>

      <Text style={{fontWeight: 700, paddingLeft: 10, fontSize: 16, paddingBottom: -150}}>Dry Cough</Text>
      <Text style={{fontSize: 12, paddingLeft: 10}}>It appears to spread from person to person among those in close contact.</Text>
             <Image
            source={{
              uri:
                'https://img.icons8.com/external-justicon-flat-justicon/2x/external-cough-virus-transmission-justicon-flat-justicon-1.png',
            }}
            style={styles.image5}
          />
      
      
      </View>

      <View style={[styles.container6, styles.shadowProp]}>
      <Text style={{fontWeight: 700, paddingLeft: 10, fontSize: 16,}}>Fever</Text>
       <Text  style={{fontSize: 12, paddingLeft: 10}}>People who are older or have chronic medical conditions such as heart or lung disease.</Text>

               <Image
            source={{
              uri:
                'https://img.icons8.com/external-justicon-flat-justicon/2x/external-fever-coronavirus-justicon-flat-justicon.png',
            }}
            style={styles.image6}
          />
      
      </View>

      <View style={[styles.container7, styles.shadowProp]}>
      <Text  style={{fontWeight: 700, paddingLeft: 8, fontSize: 16}}>Breathlessness</Text>
      <Text style={{fontSize: 12, paddingLeft: 10, paddingBottom: -130}}>Excited or tense, often to the point of holding your breath.</Text>
           <Image
            source={{
              uri:
                'https://img.icons8.com/external-justicon-flat-justicon/2x/external-breathing-virus-transmission-justicon-flat-justicon-1.png',
            }}
            style={styles.image7}
          />
      
      </View>
      
      </View>

         
    <View>

             <TouchableOpacity  onPress={()=>NextPage()}  style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'white', paddingLeft: 7, paddingTop: 6,   marginTop: 100, borderWidth: 3, borderColor: '#f08080', marginLeft: 60}}>
        <Text style={{fontWeight: 700, color:"#cd5c5c"}}>See prevention page</Text>
      </TouchableOpacity>
        
        
        
        
        </View>


    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'row',
    paddingLeft: 30,
    borderRadius: 20,
    paddingTop: 46,
    backgroundColor: '#CD5C5C',
  },

  icon: {
    paddingLeft: 260,
    paddingBottom: -100,
    marginTop: -32,
  },

  icon2: {
    paddingLeft: -270,
    paddingTop: 90,
    marginTop: -90,
  },

   text: {
    fontSize: 11.5,
    textAlign: 'left',
    color: 'white',
    fontWeight: 700,
  },


  

  container3:{
    width: 150,
    height: 190,
    backgroundColor: "#f08080",
    borderRadius: 24,
    paddingTop: 20,
    paddingLeft: 15,
    marginLeft: -20,
    marginTop: -50,
  },

  
    image3: {
    width: 60,
    height: 80,
    marginTop: 22,
    borderRadius: 15,
    marginLeft: -1,
  },

    container4:{
    width: 140,
    height: 190,
    backgroundColor: "#f08080",
    borderRadius: 24,
    paddingTop: 30,
    marginLeft: 148,
    marginTop: -188,
  },

    
  image5: {
    width: 57,
    height: 75,
    marginTop: -2,
    borderRadius: 15,
    marginLeft: 8,
  },

  container6:{
    width: 150,
    height: 185,
    backgroundColor: "#f08080",
    borderRadius: 24,
    paddingTop: 20,
    marginLeft: -20,
    marginBottom: -190,
  },

  image6: {
    width: 57,
    height: 80,
    marginTop: 1,
    borderRadius: 15,
    marginLeft: 8,
  },

  container7:{
    width: 140,
    height: 185,
    backgroundColor: "#f08080",
    borderRadius: 24,
    paddingTop: 20,
    marginLeft: 148,
    marginTop: 7,
  },

   image7: {
    width: 57,
    height: 80,
    marginTop: 12,
    borderRadius: 15,
    marginLeft: 13,
  },
   shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
 



});

export default SymptomsScreen;
