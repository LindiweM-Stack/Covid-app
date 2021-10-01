import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlipToggle,
  TouchableOpacity,
  Dimensions,
  Button,
  FlatList,
  Animated,
  TouchableWithoutFeedback,}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Switch from '@material-ui/core/Switch';
import PreventionScreen from './PreventionScreen';
import { FloatingActionButton } from "@progress/kendo-react-buttons";









const StatsScreen = ({ navigation }) => {

  
  
  const url = ' https://covid19api.com/summary';
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        console.log(response, 'response');
        setData(response);
        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCovidData();
  }, []);

  const NextPage = () => {
    {
      navigation.navigate('Symptoms');
    }
  };

  return (
    <View style={styles.container}>
      <View>
      
        <Icon style={styles.icon2} name="menu" size={26} />
      </View>

      <View>
        <Icon style={styles.icon} name="notifications" size={26} />
      </View>
            <Date />
      <View>
        <Text style={styles.text}>Statistics</Text>
      </View>
         <br/>
      <View>
        <TouchableOpacity style={styles.touch2}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'courierNew',
              color: 'black',
              paddingTop: 9,
              paddingLeft: 50,
            }}>
            Global{' '}
          </Text>
        </TouchableOpacity>
      </View>
      


       <br/>
      <View>
        <View
          style={{
            width: 100,
            height: 80,
            backgroundColor: '#f08080',
            fontWeight: 400,
            paddingLeft: 20,
            paddingTop: -30,
            borderRadius: 12,
            marginLeft: 3,
          }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 14,
              textDecorationLine: 'underline',
            }}>
            Total Cases
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 700,
              paddingLeft: -30,
              paddingTop: 20,
            }}>
            {data ? data.Global.TotalConfirmed : 0}
          </Text>
        </View>

        <View
          style={{
            width: 95,
            height: 80,
            backgroundColor: '#f08080',
            fontWeight: 400,
            paddingLeft: 20,
            paddingTop: -20,
            marginTop: -80,
            borderRadius: 12,
            marginLeft: 105,
          }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 14,
              textDecorationLine: 'underline',
            }}>
            Recovered
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              paddingLeft: -10,
              paddingTop: 18,
            }}>
            {data ? data.Global.TotalDeaths : 0}
          </Text>
        </View>

        <View
          style={{
            width: 90,
            height: 80,
            backgroundColor: '#f08080',
            fontWeight: 400,
            paddingLeft: 20,
            paddingTop: -40,
            marginTop: -80,
            borderRadius: 12,
            marginLeft: 205,
          }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 14,
              textDecorationLine: 'underline',
            }}>
            Deaths
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 700,
              paddingLeft: -35,
              paddingTop: 30,
            }}>
            {data ? data.Global.TotalRecovered : 0}
          </Text>
        </View>

<br/>






              <View>
        <TouchableOpacity  onPress={() => SouthAfrica()} style={styles.touch}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'courierNew',
              color: 'black',
              paddingTop: 9,
              paddingLeft: 30,
            }}>
            My Country{' '}
          </Text>
        </TouchableOpacity>
      </View>

      




















      </View>
      <br />

  



















     
      <br />
      <View>
        <TouchableOpacity
          onPress={() => NextPage()}
          style={{
            borderRadius: 24,
            width: 150,
            height: 40,
            backgroundColor: 'white',
            paddingLeft: 10,
            paddingTop: 6,
            marginTop: -3,
            borderWidth: 3,
            borderColor: '#515E63',
            marginLeft: 60,
          }}>
          <Text style={{ fontWeight: 700 }}>See Symptoms Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'row',
    paddingLeft: 30,
    borderRadius: 20,
    paddingTop: 46,
    backgroundColor: '#CD5C5C',
  },

  icon: {
    paddingLeft: 260,
    paddingTop: -0,
    marginTop: -25,
  },

  icon2: {
    paddingRight: 10,
    paddingTop: -1,
  },

  text: {
    fontWeight: 700,
    fontSize: 20,
    marginTop: 20,
    color: 'white',
  },

  touch2: {
    width: 160,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#f08080',
    marginTop: -2,
    marginLeft: 130,
    borderwidth: 5,
  },

    touch: {
    width: 160,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#C27B62',
    marginTop: -158,
    marginLeft: -1,
    borderwidth: 5,
  },


});

export default StatsScreen;
