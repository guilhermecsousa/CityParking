import React from 'react';
import {Image, ScrollView, TextInput, StyleSheet, Text, View, Button} from 'react-native';

export default class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      pass: true,
      viewpass: 'md-eye-off',
    };  
  }

  render(){
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source = {
              __DEV__
              ? require('../assets/images/icon.png')
              : require('../assets/images/icon.png')
            }
            style = {styles.welcomeImage} 
          /> 
        </View>
        <View style={styles.getStartedContainer}>
              <TextInput
                  style={{height: 40,width:'65%', borderColor: 'gray', borderWidth: 0, paddingHorizontal:10, marginVertical:10, backgroundColor:'white', elevation:10, shadowColor:'black'}}
                  placeholder=' Email'
              />             
              <TextInput
                  style={{height: 40,width:'65%', borderColor: 'gray', borderWidth: 0, paddingHorizontal:10, marginVertical:10,  backgroundColor:'white', elevation:10, shadowColor:'black'}}
                  placeholder=' Password'
              />   
        </View >
        <View style={styles.welcomeContainer}>
          <Text style={{color: '#5a6570'}}>   <Text style={{color: '#C85400'}}>                                                  </Text> </Text>
        </View> 
        <View style={styles.buttons}>
          <Button
            onPress={()=> this.props.navigation.navigate('AppNavigator')} 
            title="Login"
            color="#C85400"
          />
        </View> 
        <View style={styles.welcomeContainer}>
          <Text style={{color: '#5a6570'}}> Ainda não tem conta? <Text style={{color: '#C85400'}} onPress={()=> this.props.navigation.navigate('Register')}> Registe-se</Text> </Text>
        </View> 
      </ScrollView>
    </View>
  );
  }
}

Login.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF7',
    opacity: 47
  },
  buttons: {
    marginVertical: 10,
    width:'65%',
    marginLeft:'17.5%',
    justifyContent: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    width: '100%',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeImage: {
    width: 250,
    height: 175,
    resizeMode: 'contain',
    marginTop: 50,
    marginLeft: -10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    flexDirection:'row',
    justifyContent: 'center',
  }
});
