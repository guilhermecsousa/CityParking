import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button} from 'react-native';

export default class Bills extends React.Component {
  static navigationOptions =
  {
    title: 'Faturas'
  }
  
render(){
  return (
    <ScrollView style={{backgroundColor: '#FFFDF7'}}> 
        <View>
            <View style={styles.box}>
                <Text style={{marginLeft:8, marginTop:15, fontSize:15, color:"#434549"}}>
                    <Text style={{fontWeight: "bold"}}>Data: </Text>
                    <Text>2019/10/15</Text>
                </Text>
                <Text style={{marginLeft:8, marginTop:5, fontSize:15, color:"#434549"}}>
                    <Text style={{fontWeight: "bold"}}>Local: </Text>
                    <Text>Parque nº1 - Universidade de Aveiro</Text>
                </Text>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.ButtonContainer}>
                        <View style={{marginLeft:40, marginRight:40}}>
                            <Button
                                onPress={()=> alert('Indisponível')}
                                title="Consultar"
                                color="#C85400"
                            />
                        </View>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <View style={{marginLeft: 40, marginRight:30}}>
                            <Button
                                onPress={()=> alert('Indisponível')}
                                title="Transferir"
                                color="#C85400"
                            />
                        </View>
                    </View>
                </View>       
            </View>


            <View style={styles.box}>
                <Text style={{marginLeft:8, marginTop:30, fontSize:15, color:"#434549"}}>
                    <Text style={{fontWeight: "bold"}}>Data: </Text>
                    <Text>2019/10/11</Text>
                </Text>
                <Text style={{marginLeft:8, marginTop:5, fontSize:15, color:"#434549"}}>
                    <Text style={{fontWeight: "bold"}}>Local: </Text>
                    <Text>Parque nº3 - Universidade de Aveiro</Text>
                </Text>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.ButtonContainer}>
                        <View style={{marginLeft:40, marginRight:40}}>
                            <Button
                                onPress={()=> alert('Indisponível')}
                                title="Consultar"
                                color="#C85400"
                            />
                        </View>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <View style={{marginLeft: 40, marginRight:30}}>
                            <Button
                                onPress={()=> alert('Indisponível')}
                                title="Transferir"
                                color="#C85400"
                            />
                        </View>
                    </View>
                </View>       
            </View>  


            <View style={styles.box}>
                <Text style={{marginLeft:8, marginTop:30, fontSize:15, color:"#434549"}}>
                    <Text style={{fontWeight: "bold"}}>Data: </Text>
                    <Text>2019/09/30</Text>
                </Text>
                <Text style={{marginLeft:8, marginTop:5, fontSize:15, color:"#434549"}}>
                    <Text style={{fontWeight: "bold"}}>Local: </Text>
                    <Text>APARC - Bom Sucesso, Porto</Text>
                </Text>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.ButtonContainer}>
                        <View style={{marginLeft:40, marginRight:40}}>
                            <Button
                                onPress={()=> alert('Indisponível')}
                                title="Consultar"
                                color="#C85400"
                            />
                        </View>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <View style={{marginLeft: 40, marginRight:30}}>
                            <Button
                                onPress={()=> alert('Indisponível')}
                                title="Transferir"
                                color="#C85400"
                            />
                        </View>
                    </View>
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
    padding:5,
    marginTop:10,
    marginBottom:5,
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
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
    marginBottom:20,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF7',
    alignSelf: 'center'
  },
});

