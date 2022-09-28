import React,{Component} from "react";
import{Text,View,ScrollView, Touchable, TouchableOpacity, ImageBackground} from 'react-native';
import Home from "./src/componente/HomePaje";
import  containers from './src/estilos/estilo';


class App extends Component{
  render(){
    const ImagemLogin = require('./src/img/Login.png')

    return(

        <View>
          <View style={[containers.alinhamentoVertical,containers.containerSecundarios,containers.estiloLogin]}>
                   
                 
                   
                   <View>
                   <TouchableOpacity  >
                   <Text style={[containers.coresTextoTitulos,containers.estiloLogoMarca]}>BAZZAAR</Text>
                   </TouchableOpacity>
                   </View>
                   
                   <View >
                   <TouchableOpacity style={{flexDirection:'row'}} >
                   <Text style={containers.coresTextoTitulos}>Login</Text>
                 
                     <ImageBackground source={ImagemLogin} style={{width:40,height:20}}>
                   
                     </ImageBackground>
                   </TouchableOpacity>
                  
                   </View>
                       

          
                   
          </View>
          
          <Home>

            
          </Home>
         


         

        </View>
    )
  }
}



export default App
