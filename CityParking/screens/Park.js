import React from 'react';
import { StyleSheet, View, ScrollView, Image,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ReservarParque extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('nome'),
    headerStyle:{
      height:50,
      marginTop:-20,
    },
  });
      
  state={
    nome:"",
    local:"",
    imgURL:"",
    ncarros:"",
    capacity:"",
    horario:"",
    tarifa:"",
    cor:"",
    }

  componentDidMount(){
    const {navigation} = this.props;
    var n = navigation.getParam('nome');
    var l = navigation.getParam('local');
    var iu = navigation.getParam('localimg');
    var nc = navigation.getParam('ncarros');
    var ca = navigation.getParam('capacity');
    var h = navigation.getParam('horario');
    var t = navigation.getParam('tarifa');

    if(nc == ca) cor = "#cc0000"
    else if(nc >= (ca/2)) cor = "#e65c00"
    else cor = "#009900"
    
    this.setState({nome:n, local:l, imgURL:iu, ncarros:nc, capacity:ca, horario:h, tarifa:t});
  }
  
  render() {
    const url = this.state.imgURL;
  
    if(url!='' ){
      if(cor !="#cc0000"){
      return (      
      <View>
        <View style={{height:60, marginTop:10, flexDirection:'row', backgroundColor:cor, justifyContent:"flex-start", alignItems:"center"}}>
          <View style={{flexDirection:'row', width:"75%"}}>
          <Image 
            source={require('../assets/images/car.png')}
            style={{width:40, height:40, marginLeft:3}}
          />
          <Text style={{fontSize:20, color:"black", marginLeft:6, marginTop:6}}>{this.state.capacity-this.state.ncarros} lugares</Text>
        </View>
        <TouchableOpacity
          style={{borderRadius:8,backgroundColor:"#FFFDF7",width:80, height:40, borderWidth:1, flexDirection:"row", borderColor:"#514f4f", alignItems:"center", elevation:20, justifyContent:"center"}}
          onPress ={()=>  this.props.navigation.navigate('Pay', {nome:this.state.nome, tarifa:this.state.tarifa})}
        >
          <Text style={{fontSize:12, color:"#514f4f", fontWeight:'bold', textAlign:"center"}}>Emitir título</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={{marginLeft:3, marginRight:3, marginTop:10, alignItems:'center'}}>
          <Image 
            source = {{uri : url}  }
            style={{width:370, height:200}}
          />
        </View>
        <View style={{backgroundColor:"#FFFDF7", marginTop:10, marginBottom:10}}>
          <View style={{marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row'}}>
            <Image 
              source={require('../assets/images/local.png')}
              style={{width:30, height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}>  {this.state.local}</Text>
          </View>
          <View style={{marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row'}}>
            <Image 
              source={require('../assets/images/coin.png')}
              style={{width:30, height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}>  {this.state.tarifa}</Text>
          </View>
          <View style={{marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row'}}>
            <Image 
              source={require('../assets/images/park.png')}
                style={{width:30, height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}> Capacidade para {this.state.capacity} viaturas</Text>
          </View>
          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row'}}>
            <Image 
              source={require('../assets/images/clock.png')}
              style={{width:30, height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}>  {this.state.horario}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}else{
  return (      
    <View>
      <View style={{height:60, marginTop:10, flexDirection:'row', backgroundColor:cor, justifyContent:"flex-start", alignItems:"center"}}>
        <View style={{flexDirection:'row', width:"75%"}}>
          <Image 
            source={require('../assets/images/car.png')}
            style={{width:40, height:40, marginLeft:3}}
          />
          <Text style={{fontSize:20, color:"black", marginLeft:6, marginTop:6}}>{this.state.capacity-this.state.ncarros} lugares</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{marginLeft:3, marginRight:3, marginTop:10, alignItems:'center'}}>
          <Image 
            source = {{uri : url} }
            style={{width:370, height:200}}
          />
        </View>
        <View style={{backgroundColor:"#FFFDF7", marginTop:10, marginBottom:10}}>
          <View style={{marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row'}}>
            <Image 
              source={require('../assets/images/local.png')}
              style={{width:30,height:30}}
            />
            <Text style={{marginLeft:8,fontSize:20, color:"#434549"}}>  {this.state.local}</Text>
          </View>
          <View style={{marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row'}}>
            <Image 
              source={require('../assets/images/coin.png')}
              style={{width:30,height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}>  {this.state.tarifa}</Text>
          </View>
          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
            <Image 
              source={require('../assets/images/park.png')}
              style={{width:30, height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}> Capacidade para {this.state.capacity} viaturas</Text>
          </View>
          <View style={{ marginLeft:15, marginRight:15, marginTop:10, flexDirection:'row',}}>
            <Image 
              source={require('../assets/images/clock.png')}
              style={{width:30, height:30}}
            />
            <Text style={{marginLeft:8, fontSize:20, color:"#434549"}}>  {this.state.horario}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
}else{
  return (
    <View style={styles.waitScreen}> 
      <Image
        source = {{uri : 'https://i.pinimg.com/originals/6e/c8/fa/6ec8fa35800b339aa060d70d67edcf03.gif'}}
        style = {styles.welcomeImage}
      /> 
    </View>
  );
} 
}
}

const styles = StyleSheet.create({
header:{
backgroundColor: "#20B2AA",
},
headerContent:{
padding:30,
alignItems: 'center',
},
avatar: {
width: 130,
height: 130,
borderRadius: 63,
borderWidth: 4,
borderColor: "#FFFFFF",
marginBottom:10,
},
image:{
width: 60,
height: 60,
},
name:{
fontSize:22,
color:"#FFFFFF",
fontWeight:'600',
},
body: {
padding:30,
backgroundColor :"#E6E6FA",
},
body2: {
padding:30,
},
box2: {
marginTop:20,
marginLeft:15,
marginRight:15,
marginBottom:10,
backgroundColor: '#f4f4f4',
flexDirection: 'row',
shadowColor: 'black',
shadowOpacity: .2,
shadowOffset: {
height:1,
width:-1
},
height:60,
elevation:2,
alignItems:"center"
},
box: {
marginTop:5,
marginLeft:15,
marginRight:15,
marginBottom:5,
backgroundColor: '#f4f4f4',
flexDirection: 'row',
shadowColor: 'black',
shadowOpacity: .2,
shadowOffset: {
height:1,
width:-1
},
height:60,
elevation:2,
alignItems:"center"
},
username:{
color: "#20B2AA",
fontSize:22,
alignSelf:'center',
marginLeft:10
},
username2:{
color: "black",
fontSize:14,
alignSelf:'center',
marginLeft:10
}
});