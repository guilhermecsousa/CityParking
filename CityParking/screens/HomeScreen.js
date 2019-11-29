import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text ,TouchableOpacity, Image} from 'react-native';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class HomeScreen extends React.Component {
  
  static navigationOptions =
  {
     title: 'CityParking',
     header:null,
     
  };
  constructor(props){
    super(props)
    this.state = {
      lat : 0,
      lon : 0,
      location:null,
      isDone: false,
      p : [{key:0,nome :"Parque nº1", local:"Universidade de Aveiro", latitude: 40.631977, longitude: -8.656618, imgURL: 'https://api-imagens.ua.pt/v1/image/resizer?imageUrl=https://uaonline.ua.pt/upload/img/joua_i_1983.jpg&width=1200',
            ncarros:133, capacity:350, horario:"Aberto 24h", tarifa:"Acesso condicionado"},
           {key:1,nome :"Parque Autocarro Bar", local:"Centro Hospitalar do Baixo Vouga", latitude: 40.634619, longitude: -8.656845, imgURL: 'http://www.diarioaveiro.pt/files/news/5b9e6e48eb335.png', 
            ncarros:400, capacity:400, horario:"Aberto 24h", tarifa:"1€/dia"},
           {key:2,nome :"Parque CP", local:"Universidade de Aveiro", latitude: 40.629040, longitude: -8.654670, imgURL: 'http://1.bp.blogspot.com/_YWL00r4qARg/SyPlu9D4c0I/AAAAAAAAO8s/bNs-PmHkMaU/s320/IMGP5349.JPG',
            ncarros:398, capacity:450, horario:"Aberto 24h", tarifa:"Não tarifado"}]
    }
  }


  componentWillMount() {
      this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      lat : location.coords.latitude,
      lon : location.coords.longitude,
      isDone : true
    });
  }
  
  render() {    
    if (this.state.location) {
      text = JSON.stringify(this.state.location); 
    }
    if(this.state.isDone){
      return (      
        <MapView style={{flex:1}}
          initialRegion={{
            latitude: this.state.lat,
            longitude: this.state.lon,
            latitudeDelta: 0.0062,
            longitudeDelta: 0.0061,
          }}
          showsUserLocation={true}
          showsTraffic={true}
          showsMyLocationButton={true}
          provider={PROVIDER_GOOGLE}
        >

          {this.state.p.map(marker => (
            <Marker
              key={marker.key}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.nome}
              onCalloutPress={()=> this.props.navigation.navigate('Reservar', {nome:marker.nome, local:marker.local, localimg:marker.imgURL, ncarros: marker.ncarros, cost:marker.cost, capacity:marker.capacity, horario:marker.horario, tarifa:marker.tarifa} )} 
            />
          ))}
        </MapView>
      );
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  welcomeImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: 50,
    marginLeft: -10,
  },
  waitScreen:{
    backgroundColor : '#EBEDEE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});