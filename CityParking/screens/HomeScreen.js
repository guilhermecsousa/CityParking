import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Picker ,Image, TouchableOpacity, Button,StatusBar} from 'react-native';
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
    local=[["Aveiro,40.644269,-8.645535","Albergaria-a-Velha,40.6939,-8.48101","São João da Madeira,40.900956,-8.499744","Oliveira de Azeméis,40.84,-8.47631","Castelo de Paiva,41.063007,-8.264696","Estarreja,40.756482,-8.572074","Oliveira do Bairro,40.5154,-8.49402"],
           ["Porto,41.149606,-8.610993", "Vila Nova de Gaia,41.1359,-8.63319","Matosinhos,41.183,-8.67977", "Póvoa de Varzim,41.3826,-8.76279","Marco de Canaveses,41.1817,-8.14951","Amarante, 41.2697,-8.07834","Paços de Ferreira, 41.2646,-8.349"],
           ["Guarda,40.5371,-7.26785", "Gouveia,40.4936,-7.59372","Sabugal,40.3519,-7.08937", "Trancoso,40.7784,-7.34916","Pinhel,40.776,-7.0629","Celorico da Beira,40.6359,-7.39322","Vila Nova de Foz Côa,41.0828,-7.13513","Almeida,40.7263,-6.90695"]];

    this.state = {
      lat : 0,
      lon : 0,
      location: null,
      isDone: false,
      p : [{key:0, nome:"Parque nº1", local:"Universidade de Aveiro", latitude:40.631977, longitude:-8.656618, imgURL:'https://api-imagens.ua.pt/v1/image/resizer?imageUrl=https://uaonline.ua.pt/upload/img/joua_i_1983.jpg&width=1200',
            ncarros:133, capacity:350, horario:"Aberto 24h", tarifa:"Acesso condicionado"},
           {key:1, nome:"Parque Autocarro Bar", local:"Centro Hospitalar do Baixo Vouga", latitude:40.634619, longitude:-8.656845, imgURL:'http://www.diarioaveiro.pt/files/news/5b9e6e48eb335.png', 
            ncarros:400, capacity:400, horario:"Aberto 24h", tarifa:"1€/dia"},
           {key:2, nome:"Parque CP", local:"Universidade de Aveiro", latitude:40.629040, longitude:-8.654670, imgURL:'http://1.bp.blogspot.com/_YWL00r4qARg/SyPlu9D4c0I/AAAAAAAAO8s/bNs-PmHkMaU/s320/IMGP5349.JPG',
            ncarros:398, capacity:450, horario:"Disponível 24h", tarifa:"Não tarifado"},
           {key:3, nome:"Parque Saba", local: "Pr. Marquês de Pombal - Aveiro", latitude:40.63916, longitude:-8.653378, imgURL:'https://www.cpe.pt/fotos/parques/pmp_2_4870413425135eac6a3838.jpg',
            ncarros:16, capacity:100, horario:"08h00 às 24h00", tarifa:"0,10€/15min"},
           {key:4, nome:"Parque Rossio", local:"Rossio - Aveiro", latitude:40.64157, longitude:-8.655242, imgURL:'http://www.diarioleiria.pt/files/news/5c2f7bd785249.png',
            ncarros:20, capacity:50, horario:"Disponível 24h", tarifa:"0,10€/15min"},
           
            {key:5, nome:"Parque Saba Casa da Música", local:"Boavista, Porto", latitude:41.158400, longitude:-8.631000, imgURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Casamusicaexterior.jpg/1280px-Casamusicaexterior.jpg',
            ncarros:80, capacity:150, horario:"08h00 às 24h00", tarifa:"0,50€/h"},
           {key:6, nome:"Parque Brasília", local:"Av. da Boavista, Porto", latitude:41.157270, longitude:-8.625797, imgURL:'https://www.empark.com/media/cache/media/uploads/parkings/Brasilia_1562576971.jpg',
            ncarros:20, capacity:100, horario:"Disponível 24h", tarifa:"0,55€/15min"},
           {key:7, nome:"APARC", local:"Pr do Bom Sucesso, Porto", latitude:41.149657, longitude:-8.623802, imgURL:'https://static.parclick.com/parking/2016/06/parking-2473-large.jpg',
            ncarros:20, capacity:100, horario:"Disponível 24h", tarifa:"0,55€/15min"}
          ],
        districts : [{key:0, name:'Aveiro'}, {key:1, name:'Porto'}, {key:2, name:'Guarda'}],
        first: 'District',
        councils: ['Aveiro','São João da Madeira','Castelo de Paiva','Estarreja'],
        second : 'County',
        firstKey:0,
        choose: false,
    }
  }


  componentWillMount() {
      this._getLocationAsync();
      StatusBar.setHidden(true);
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
  
  mudarDistrito(key){
    aux = local[key];
    arr = [];
   
    for( c of aux){
      arr.push(c.split(",")[0]);
    }
   
    this.setState({councils:arr,firstKey:key})
  }

  conselhoEscolhido(key){
    dist = local[this.state.firstKey];
    chose = dist[key];
    aux = chose.split(",");
    lat =  parseFloat(aux[1]);
    lon =  parseFloat(aux[2]);
    this.setState({mapRegion:{
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }})
  }
  render() {    
    if (this.state.location) {
      text = JSON.stringify(this.state.location); 
    }
    if(this.state.isDone){
      if(this.state.choose){
        return(
          <View style={styles.container}>
            <MapView style={{ alignSelf: 'stretch', height: '100%' }}
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
            <View style={{flexDirection:'row', backgroundColor:'#FFF9E6',top:0,height: 80, width:'100%', justifyContent:"center", position:"absolute"}}>
              <Picker
                  selectedValue={this.state.first}
                  style={{height: 40, width: '35%',backgroundColor:'#FFFFFF', marginTop:'7%', marginLeft:'2%', elevation:5}}
                  onValueChange={(itemValue, itemIndex) =>{
                    this.setState({first: itemValue});
                    this.mudarDistrito(itemIndex);
              }}>

                  {this.state.districts.map (dist => (
                        <Picker.Item key={dist.key} label={dist.name} value={dist.key} />
                  ))}
              </Picker>

              <Picker
                selectedValue={this.state.second}
                style={{height: 40, width: '35%', backgroundColor:'#FFFFFF', marginTop:'7%', marginLeft:'2%', marginRight:'5%', elevation:5}}
                onValueChange={(itemValue, itemIndex) =>{
                  this.setState({second: itemValue});
                  this.conselhoEscolhido(itemIndex);
              }}>
                {this.state.councils.map (con => (
                    <Picker.Item  label={con} value={con} />
                ))}
              </Picker>
              <TouchableOpacity 
                onPress={() => this.setState({choose: false})}
                style={{height: 30, width: '10%', marginTop:'7%', marginRight:'2%', elevation:5}}
              >
                <View>
                  <Image
                    style={{width:40, height:40}}
                    source={require('../assets/images/arrow.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );    
      }else{
        return (      
          
          <View style={{flex:1}}>
            <MapView style={{ alignSelf: 'stretch', height: '100%' }}
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
            <TouchableOpacity 
                onPress={() => this.setState({choose: true})}
                style={styles.overlay}
            >
                <View>
                  <Image
                    style={{width:50, height:50}}
                    source={require('../assets/images/search.png')}
                  />
                </View>
              </TouchableOpacity>
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
  overlay: {
    position: 'absolute',
    bottom: "4%",
    marginRight: "8%",
    alignSelf: 'flex-end',
    
  },
  waitScreen:{
    backgroundColor : '#EBEDEE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});