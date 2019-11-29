import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  CheckBox,
  Picker,
} from 'react-native';
export default class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      checked2 : false,
      sex: 'Sex',
    };  
  }

  onChangeCheck() {
      if(this.state.checked==false){
        this.setState({ checked: true})
        this.setState({ checked2: false})
      }else{
        this.setState({ checked: false})
      }      
  }

  onChangeCheck2() {
    if(this.state.checked2==false){
        this.setState({ checked2: true})
        this.setState({ checked: false})
      }else{
        this.setState({ checked2: false})
      }    
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/icon.png')
                  : require('../assets/images/icon.png')
              }
              style={styles.welcomeImage}
            />
           </View>

          <View style={styles.getStartedContainer}>
                <TextInput
                  style={styles.inputBox}
                  placeholder=' Email'
              />

              <TextInput
                  style={styles.inputBox}
                  placeholder=' Password'
                  secureTextEntry={true}
              />
              <TextInput
                  style={styles.inputBox}
                  placeholder=' Confirmar Password'
                  secureTextEntry={true}
              />
              <TextInput
                  style={styles.inputBox}
                  placeholder=' Nome'
              />
              <TextInput
                  style={styles.inputBox}
                  placeholder=' Nº de Contribuinte'
              />
              <TextInput
                  style={styles.inputBox}
                  placeholder=' Morada'
                  secureTextEntry={true}
              />
              <TextInput
                  style={styles.inputBox}
                  placeholder=' Telemóvel'
                  secureTextEntry={true}
              />
            </View > 

            <View style={styles.welcomeContainer2}>
                <Text style={{color: '#5a6570', marginTop:6}}>Portador do CEPD </Text>
                <CheckBox
                    value={this.state.checked}
                    onChange={() => this.onChangeCheck()} />
            </View> 


           <View style={styles.buttons}>
              <Button 
               onPress={() => this.props.navigation.navigate('AppNavigator')}
               title="Registar"
               color="#C85400"
              />
          </View>

          <View style={styles.welcomeContainer}>
                <Text style={{color: '#5a6570'}}> Já tem conta? <Text style={{color: '#C85400'}}  onPress={()=> this.props.navigation.navigate('Login')}> Login aqui</Text> </Text>
            </View> 
          
          <View style={styles.welcomeContainer}>
                <Text style={{color: '#5a6570'}}>   <Text style={{color: '#C85400'}}>                                                  </Text> </Text>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox:{
    height: 40,width:'65%', 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal:10, 
    marginVertical:10
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer2: {
    marginLeft:'17.5%',
    marginTop: 10,
    marginBottom: 20,
    flexDirection:'row',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    flexDirection:'row',
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 250,
    height: 175,
    resizeMode: 'contain',
    marginTop: 1,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  buttons: {
    marginVertical: 10,
    width:'65%',
    marginLeft:'17.5%',
    justifyContent: 'center',
  },
});