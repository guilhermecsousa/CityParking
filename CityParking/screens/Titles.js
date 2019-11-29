import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Button} from 'react-native';

export default class Titles extends Component {
  static navigationOptions =
  {
    title: 'Títulos ativos'
  }

render(){
  return (
    <ScrollView style={{backgroundColor: '#FFFDF7'}}> 
      <View>
        <View style={styles.box}>
          <Text style={{fontSize:20, color:"black", marginLeft:6, marginTop:6, textAlign:'center'}}>Parque nº1 - Universidade de Aveiro</Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Data de início: </Text>
            <Text>2019/11/29</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Hora de início: </Text>
            <Text>12:03</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Data de término: </Text>
            <Text>2019/12/02</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Hora de término: </Text>
            <Text>12:03</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Localização: </Text>
            <Text>Próximo do edifício da Reitoria</Text>
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={{marginLeft:9,}}>
            <Button
              onPress={()=> alert('Título renovado')}
              title="Renovar título"
              color="#C85400"
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.box}>
          <Text style={{fontSize:20, color:"black", marginLeft:6, marginTop:6, textAlign:'center'}}>Parque Autocarro Bar</Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
          <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Data de início: </Text>
            <Text>2019/11/30</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Hora de início: </Text>
            <Text>16:53</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Data de término: </Text>
            <Text>2019/11/30</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Hora de término: </Text>
            <Text>17:53</Text>
          </Text>
        </View>
        <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
        <Text style={{marginLeft:8,fontSize:15, color:"#434549"}}>
            <Text style={{fontWeight: "bold"}}>Localização: </Text>
            <Text>Próximo do Centro Hospitalar do Baixo Vouga</Text>
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <View style={{marginLeft:9,}}>
            <Button
              onPress={()=> alert('Título renovado')}
              title="Renovar título"
              color="#C85400"
            />
          </View>
        </View>
      </View>   
    </ScrollView>    
  )
  }
}  
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFDF7',
    opacity: 47
  },
  box: {
    height:50,
    padding:5,
    marginBottom:10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  ButtonContainer: {
    marginTop:50,
    marginBottom:50,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF7',
    alignSelf: 'center'
  },
});

