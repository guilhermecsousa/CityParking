import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, ScrollView, Button} from 'react-native';

export default class App extends Component {

  static navigationOptions =
  {
     title: 'O seu perfil',
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
    <ScrollView> 
      <View style={styles.MainContainer}>
        <Image
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',}}
          style={{ width: 120, height: 120, borderRadius: 120 / 2, marginTop:50 }}
        />
        <Text style={styles.text}>Pedro Monteiro</Text>
         
        <View style={{backgroundColor:"#FFFDF7", marginTop:50, marginBottom:10, width:"90%", marginLeft:"5%", marginRight:"5%"}}>
        
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Image 
            source={require('../assets/images/address.png')}
            style={{width:20,height: 20}}
          />
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>Rua Mário Sacramento, 13 - Aveiro</Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Image 
            source={require('../assets/images/phone.png')}
            style={{width:20,height: 20}}
          />
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>942156830</Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Image 
            source={require('../assets/images/mail.png')}
            style={{width:20,height: 20}}
          />
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>pedromonteiro12@email.pt</Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Text style={{fontWeight: "bold"}}>NIF</Text>
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>274175238</Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Image 
            source={require('../assets/images/disability.png')}
            style={{width:20,height: 20}}
          />
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>Não</Text>
        </View>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={{color: '#5a6570'}}>   <Text style={{color: '#C85400'}}>                                                  </Text> </Text>
      </View> 
      <View style={styles.MainContainer2}>
        <View style={{marginLeft:9,}}>
          <Button
            onPress={()=> this.props.navigation.navigate('Login')}
            title="Terminar sessão"
            color="#C85400"
          />
        </View>
      </View>
    </View>
  </ScrollView>   
  );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFDF7',
  },
   MainContainer2: {
    marginTop:5,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF7',
  },
  bottomcontroler: {
    marginTop:30,
    height:'75%',
    width:'100%',
    backgroundColor: '#ccdfff',
  },
  text: {
    marginTop: 15,
    fontSize: 20,
    color: '#2c2d30',
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#2c2d30',
    fontWeight: 'bold',
  },
   text3: {
    marginTop: 10,
    fontSize: 20,
    color: '#2c2d30',
    marginLeft:10,
  },
});