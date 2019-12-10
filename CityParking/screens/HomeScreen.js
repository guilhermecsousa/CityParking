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
    local=[["Conselho","Tua Localização"],
           ["Conselho","Aveiro,40.644269,-8.645535","Albergaria-a-Velha,40.6939,-8.48101","São João da Madeira,40.900956,-8.499744","Oliveira de Azeméis,40.84,-8.47631","Castelo de Paiva,41.063007,-8.264696","Estarreja,40.756482,-8.572074","Oliveira do Bairro,40.5154,-8.49402"],
           ["Conselho","Beja,38.015064,-7.863227","Aljustrel,37.877594,-8.165159","Almodôvar,37.512792,-8.060077","Alvito,38.256109,-7.991584","Barrancos,38.134462,-6.976042","Castro Verde,37.698282,-8.085812","Cuba,38.165436,-7.892402","Ferreira do Alentejo,38.05,-8.033333"],
           ["Conselho","Braga,41.550323,-8.420052","Barcelos,41.538763,-8.615053","Cabeceiras de Basto,41.514312,-7.989415","Celorico de Basto,41.387141,-8.00101","Esposende,41.536098,-8.782011","Fafe,41.454227,-8.167998","Guimarães,41.444435,-8.296189"],
           ["Conselho","Bragança,41.805817,-6.757189","Alfândega da Fé,41.343149,-6.961124","Carrazeda de Ansiães,41.242466,-7.307206","Freixo de Espada à Cinta,41.090327,-6.806478","Macedo de Cavaleiros,41.538161,-6.9611"],
           ["Conselho","Castelo Branco,39.822191,-7.490869","Covilhã,40.286011,-7.503961","Fundão,40.140247,-7.501348","Idanha-a-Nova,39.923157,-7.240819","Oleiros,39.918934,-7.913698","Penamacor,40.168946,-7.169867","Proença-a-Nova,39.752204,-7.923903","Sertã,39.808461,-8.098829"],
           ["Conselho","Coimbra,40.205642,-8.419551","Arganil,40.218261,-8.054029","Cantanhede,40.346708,-8.594195","Condeixa-a-Nova,40.115733,-8.498336","Figueira da Foz,40.150852,-8.861786","Góis,40.157353,-8.110067","Lousã,40.111911,-8.24703","Mira,40.428924,-8.737462"],
           ["Conselho","Évora,38.566667,-7.9","Alandroal,38.702005,-7.403094","Arraiolos,38.723626,-7.984777","Borba,38.80553,-7.45465","Estremoz,38.844316,-7.585854","Montemor-o-Novo,38.648117,-8.214549","Mora,38.943515,-8.164337","Mourão,38.383562,-7.341888"],
           ["Conselho","Faro,37.019367,-7.932229","Albufeira,37.090205,-8.25079","Alcoutim,37.474317,-7.472282","Aljezur,37.319152,-8.803305","Castro Marim,37.220683,-7.4435","Lagoa,37.135349,-8.453188","Lagos,37.101782,-8.674242"],
           ["Conselho","Guarda,40.5371,-7.26785", "Gouveia,40.4936,-7.59372","Sabugal,40.3519,-7.08937", "Trancoso,40.7784,-7.34916","Pinhel,40.776,-7.0629","Celorico da Beira,40.6359,-7.39322","Vila Nova de Foz Côa,41.0828,-7.13513","Almeida,40.7263,-6.90695"],
           ["Conselho","Lisboa,38.716667,-9.133333","Alenquer,39.053151,-9.009282","Amadora,38.759711,-9.239708","Arruda dos Vinhos,38.984106,-9.077463","Azambuja,39.07029,-8.86822","Cadaval,39.242977,-9.103271","Cascais,38.69745,-9.423141","Loures,38.829082,-9.168106"],
           ["Conselho","Porto,41.157947, -8.629111","Amarante,41.272711,-8.082455","Gondomar,41.144536,-8.532229","Maia,41.235739,-8.619897","Marco de Canaveses,41.183887,-8.148641","Matosinhos,41.18207,-8.689076","Póvoa de Varzim,41.38344,-8.763637","Santo Tirso,41.342567,-8.477456","Vila Nova de Gaia,41.133633,-8.617421"],
           ["Conselho","Setúbal,38.533333,-8.9","Alcácer do Sal,38.373258,-8.514436","Alcochete,38.755335,-8.960861","Almada,38.679018,-9.156904","Barreiro,38.663137,-9.072395","Grândola,38.177181,-8.566746","Moita,38.650779,-8.990383","Montijo,38.706747,-8.973885","Santiago do Cacém,38.016935,-8.69475"]
           ["Conselho","Viseu,40.661014,-7.909714","Armamar,41.107646,-7.691386","Castro Daire,40.898399,-7.933805","Cinfães,41.071969,-8.089991","Lamego,41.097407,-7.809907","Mangualde,40.604248,-7.76115","Moimenta da Beira,40.983828,-7.617653"]];

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
           {key:7, nome:"APARC", local:"Pr. do Bom Sucesso, Porto", latitude:41.149657, longitude:-8.623802, imgURL:'https://static.parclick.com/parking/2016/06/parking-2473-large.jpg',
            ncarros:20, capacity:100, horario:"Disponível 24h", tarifa:"0,55€/15min"}
          ],
        districts : [{key:0, name:'Local. atual'},{key:1, name:'Aveiro'}, {key:2, name:'Beja'}, {key:3, name:'Braga'}, {key:4, name:'Bragança'}, {key:5, name:'Castelo Branco'}, {key:6, name:'Coimbra'}, {key:7, name:'Évora'}, {key:8, name:'Faro'}, {key:9, name:'Guarda'}, {key:10, name:'Lisboa'}, {key:11, name:'Porto'}, {key:12, name:'Setúbal'}, {key:13, name:'Viseu'}],
        first: 'District',
        councils: [{key:0, name:' '}],
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
    local[0][1] = "Tua Localização," + location.coords.latitude + "," + location.coords.longitude;
  }
  
  mudarDistrito(key){
    aux = local[key];
    arr = [];
    var i = 0;
    for( c of aux){
      arr.push({key:i,name:c.split(",")[0]});
    }
   
    this.setState({councils:arr,firstKey:key})
  }

  conselhoEscolhido(key){
    if(key!=0){
      dist = local[this.state.firstKey];
      chose = dist[key];
      aux = chose.split(",");
      lat1 =  parseFloat(aux[1]);
      lon1 =  parseFloat(aux[2]);
      this.setState({
        lat: lat1,
        lon: lon1,
      });
    }
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
              region={{
                latitude: this.state.lat,
                longitude: this.state.lon,
                latitudeDelta: 0.0040,
                longitudeDelta: 0.0150,
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
                    <Picker.Item key={con.key} label={con.name} value={con.name} />
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
              region={{
                latitude: this.state.lat,
                longitude: this.state.lon,
                latitudeDelta: 0.0040,
                longitudeDelta: 0.0150,
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