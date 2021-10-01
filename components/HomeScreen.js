import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Image,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AssetExample from '../components/AssetExample';

import { Card } from 'react-native-paper';
import StatsScreen from './StatsScreen';
import PreventionScreen from './PreventionScreen';





const HomeScreen = ({ navigation }) => {
  
const NextPage=()=>{
    {navigation.navigate("Statistics")}
}

const [selectedValue, setSelectedValue] = useState('java');


  return (
    <View style={styles.container}>
      <Card style={[styles.card, styles.shadowProp]}>
        <View>
          <Icon style={styles.icon2} name="menu" size={26} />
        </View>
        <View>
          <Icon style={styles.icon} name="notifications" size={26} />
        </View>
        <br />
        <View>
          <Text style={styles.heading}>Covid-19</Text>
        </View>
        <View>
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 40,
              width: 135,
              marginLeft: 140,
              borderRadius: 24,
              marginTop: -39,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 5,
              borderColor: '#CD5C5C',

            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Global" style={{color: '#CD5C5C'}} value="global"  />
            <Picker.Item label="South Africa" value="southafrica" />
          </Picker>
        </View>

        <br />
        <View>
          <Text style={styles.subheading}>Are you feeling sick?</Text>
          <br />
        </View>
        <View>
          <Text style={styles.paragraph}>
            If you feel sick with any of covid-19 symptoms please cal or SMS us
            immediately for help.
          </Text>
          <br />
          <View>
            <TouchableOpacity style={styles.button}>
              <Icon name='call' size={20} style={styles.call}/>
                 <Text style={styles.buttontext}>
                Call Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1}>
            <Icon name="sms" size={20} style={styles.sms}/>
              <Text style={styles.button1text}>
                 Send SMS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <br/>
      <View style={styles.container2}>
        <Text style={styles.text_prevention}>Prevention</Text>
        
        <View style={styles.container_image}>
          <Image
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/coronavirus-48/64/7-128.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.text1}></Text>
        </View>

        <View>
          <Image
            source={{
              uri:
                'https://t3.ftcdn.net/jpg/02/95/07/32/240_F_295073221_BKMAeADY9zf53cCMh0V1rGJBslC0f8ag.jpg',
            }}
            style={styles.image2}
          />
        </View>

        <View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3027/3027520.png',
            }}
            style={styles.image3}
          />
        </View>

        <View>
          <Text style={styles.text1}>
            Avoid Close
            <br />
            Contact
          </Text>
        </View>
        <View>
          <Text style={styles.text2}>
            Clean your
            <br /> hands often
          </Text>
        </View>
        <View>
          <Text style={styles.text3}>Wear a facemask</Text>
        </View>
        <br />

        <View style={[styles.container3, styles.shadowProp]}>
          <Text style={styles.text_test}>
            Do your own test!
            <br />
            <br />
            Follow the instructions to
            <br />
            do your own test.
          </Text>
          <Image
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/human-5-1/48/208-128.png',
            }}
            style={styles.image4}
          />
        </View>

        <View>

             <TouchableOpacity  onPress={()=>NextPage()}  style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'white', paddingLeft: 10, paddingTop: 6,   marginTop: -5, borderWidth: 3, borderColor: '#f08080', marginLeft: 60}}>
        <Text style={{fontWeight: 700, color: '#CD5C5C'}}>See Statistics Page</Text>
      </TouchableOpacity>
        
        
        
        
        </View>





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
  
   card: {
    width: 328,
    height: 290,
    borderRadius: 24,
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    paddingLeft: 25,
    marginLeft: -27,
    backgroundColor: '#f08080',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  icon: {
    paddingLeft: 250,
    paddingTop: 0,
    marginTop: -25,
  },

  icon2: {
    paddingRight: 1,
    paddingTop: 60,
  },

  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 500,
  },
  subheading: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },

  paragraph: {
    marginBottom: -10,
    fontWeight: 400,
    fontSize: 16,
    color: 'white',
  },

  button: {
    borderRadius: 24,
    width: 130,
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 8,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#CD5C5C',
  },

  buttontext: {
    paddingLeft: -20,
    paddingBottom: 50,
    marginTop: -70,
    marginLeft: 20,
    fontWeight: 700,
    fontSize: 16,
    color: "#CD5C5C"

  },

  button1: {
    borderRadius: 24,
    width: 130,
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 3,
    marginTop: -40,
    borderWidth: 3,
    borderColor: '#CD5C5C',
    justifyContent: '',
    marginLeft: 150,
  },

  button1text: {
    paddingLeft: -20,
    paddingBottom: 60,
    marginTop: -73,
    marginLeft: 30,
    fontWeight: 700,
    fontSize: 16,
    color: "#CD5C5C"

  },
  text_prevention: {
    fontSize: 20,
    fontWeight: 700,
    paddingTop: 15,
    color: 'white',
  },

  image1: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: -20,
    marginLeft: -25,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: "#f08080",
    paddingTop: -100
 
  
    
  },

  image2: {
    width: 100,
    height: 100,
    marginLeft: 81,
    marginTop: -100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#f08080"
  },

  image3: {
    width: 100,
    height: 100,
    marginLeft: 185,
    marginTop: -105,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#f08080"


    
  },

  text1: {
    marginLeft: 5,
    fontWeight: 700,
    fontSize: 11,
  },

  text2: {
    marginLeft: 105,
    marginTop: -30,
    fontWeight: 700,
    fontSize: 11,
  },

  text3: {
    marginLeft: 210,
    marginTop: -35,
    fontWeight: 700,
    fontSize: 12,
  },

  
  container3: {
    backgroundColor: '#f08080',
    width: 310,
    height: 111,
    borderRadius: 24,
    marginLeft: -18,
    marginTop: 40,
  
  },
  image4: {
    width: 90,
    height: 160,
    marginTop: -125,
    borderRadius: 15,
    paddingLeft: -70,
    marginLeft: 10,
  },

  text_test: {
    marginLeft: 125,
    fontWeight: 600,
    color: 'white',
    fontSize: 16,
  },

  container_image:{
    marginTop: 30,
  },

  call:{
    paddingLeft: -20,
    paddingBottom: 50,
    marginTop: -1,
    marginLeft: -6,
    color: "#CD5C5C"
  },

   sms:{
    paddingLeft: -20,
    paddingBottom: 50,
    marginTop: 5,
    marginLeft: -1,
    color: "#CD5C5C"
  },

 
});

export default HomeScreen;
