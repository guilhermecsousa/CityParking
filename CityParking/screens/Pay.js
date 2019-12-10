import React from 'react';
import { ScrollView, StyleSheet, View, Text, Picker, Slider, Button} from 'react-native';

export default class Pay extends React.Component {
    static navigationOptions =
    {
      title: 'Pagamento',
      headerStyle:{
        height:50,
        marginTop:-20,
       },
    }
    state={
        name:"",
        tarifa:"",
        aux:1,
    }
  
    componentDidMount(){
        const {navigation} = this.props;
        var n = navigation.getParam('nome');
        var t = navigation.getParam('tarifa');

       this.setState({name:n, tarifa:t});
    }

render(){
  return (
    <ScrollView style={{backgroundColor: '#FFFDF7'}}> 
        <View>
            <View style={styles.box}>
                <Text style={{marginLeft:8,marginTop:10,marginBottom:10,fontSize:18,fontWeight: "bold"}}>Parque: </Text>
                <Text style={{marginTop:10,marginBottom:10,fontSize:18}}>{this.state.name}</Text>
            </View>
            <View style={styles.box}>
                <Text style={{marginLeft:8,marginTop:10,marginBottom:10,fontSize:18,fontWeight: "bold"}}>Tarifa: </Text>
                <Text style={{marginTop:10,marginBottom:10,fontSize:18}}>{this.state.tarifa}</Text>      
            </View>  
            <View style={styles.box2}>
                <Text style={{marginLeft:8,marginTop:10,marginBottom:10,fontSize:18,fontWeight: "bold"}}>Duração: </Text>
                <Slider
                    style={{width:300,height:80,marginBottom:0,alignSelf:'center'}}
                    step={1}
                    value={1}
                    minimumValue={1}
                    maximumValue={72}
                    onValueChange={val => this.setState({aux: val})}
                    thumbTintColor='#C85400'
                    maximumTrackTintColor='gray' 
                    minimumTrackTintColor='#C85400'
                />
                <View style={styles.textCon}>
                    <Text style={{color:'gray'}}>1h</Text>
                    <Text style={{color:'#C85400'}}>{this.state.aux + 'h'}</Text>
                    <Text style={{color:'gray'}}>72h</Text>
                </View>        
            </View>
            <View style={styles.box2}>
                <Text style={{marginLeft:8,marginTop:10,fontSize:18,fontWeight: "bold"}}>Método de pagamento:</Text>   
                <Picker
                    selectedValue={this.state.method}
                    style={{height:50, width:140, marginTop:10, marginBottom:10}}
                    onValueChange={(itemValue, itemIndex) => this.setState({ method: itemValue })}>
                    <Picker.Item label="MB Way" value="mb" />
                    <Picker.Item label="PayPal" value="pp" />
                    <Picker.Item label="Visa" value="v" />
                    <Picker.Item label="Mastercard" value="mc" />
                </Picker>
            </View>
            <View style={styles.buttons}>
          <Button
            onPress={()=> alert('Pagamento efetuado')} 
            title="Efetuar pagamento"
            color="#C85400"
          />
        </View>    
        </View>  
    </ScrollView>    
  )
  }
}  
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFDF7',
    opacity: 47
  },
  box: {
    padding:5,
    marginTop:10,
    marginBottom:5,
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  box2: {
    padding:5,
    marginTop:10,
    marginBottom:5,
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  buttons: {
    marginVertical: 10,
    width:'65%',
    marginLeft:'17.5%',
    justifyContent: 'center',
  },
  textCon: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:0,
    alignSelf:'center'
},
});

