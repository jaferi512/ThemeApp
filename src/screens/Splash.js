import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import * as Progress from 'react-native-progress';

const Splash = ({navigation}) => {
  const [val, setval] = React.useState(0);

  var i = 1; //  set your counter to 1
  function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 3s setTimeout when the loop is called
      setval(val => setval(val + 10));
      //console.log('hello'); //  your code here
      i++; //  increment the counter
      if (i < 11) {
        //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another
      } //  ..  setTimeout()
    }, 500);
  }
  React.useEffect(() => {
    myLoop();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="black" /> */}
      <View
        style={{
          width: '100%',
          height: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'white',
          marginTop: 30,
        }}>
        <View
          style={{
            height: '90%',
            width: '70%',
            //backgroundColor: 'brown',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: '70%', width: '70%'}}
            source={require('../assets/logos/bus_logo.png')}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '15%',
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:'white',
        }}>
        <Progress.Bar progress={val / 100} width={150} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor:'tomato',
  },
  profile: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  imageProfile: {
    width: 34,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 44 / 2,
    marginLeft: 10,
    height: 34,
  },
  name: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 16,
  },
});

export {Splash};
