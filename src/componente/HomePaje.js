import React,{Component} from "react";
import { View,Text,Image, ImageBackground,TouchableOpacity,ScrollView, Touchable } from "react-native";
import containers from "../estilos/estilo";


class Home extends Component{
    render(){
     
        let imageLinkDestaque = require('../img/destaque.jpg')
        const imageLinkModaMasculina = require('../img/masculina.jpg')
        const imageLinkModaFeminina = require('../img/shop-for-clothing-clothes-shop-on-hanger-at-the-modern-shop-boutique.jpg')
        const imageLinkRedeSociais = require('../img/redes.png')
        const imageLinkCartoes = require('../img/bandeirasCartoest_1.png')
        const imageMenuPrincipal = require('../img/Menu.png')
        const imagePesquisa = require('../img/pesquisa.png')
        
        return(
            <ScrollView style={containers.alinhamentoHorizontal}>

           
                
                
               
                
                    
                <View style={containers.containerSecundarios} >
                    <TouchableOpacity>
                <ImageBackground source={imageLinkDestaque} style={{width:'100%', height:150}}>
                    <Text style={[containers.coresTextoTitulos,containers.textosCentralizados]}>ares de destaque</Text>
                </ImageBackground>
                </TouchableOpacity>
                </View>
                
                <View style={containers.containerSecundarios}>
                    <TouchableOpacity>
                    <ImageBackground source = {imageLinkModaMasculina} style={{width:'100%', height:150}}>
                    <Text  style={[containers.coresTextoTitulos,containers.textosCentralizados]}>moda masculina</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
                
                <View style={[containers.containerSecundarios]}>
                    <TouchableOpacity>
                    <ImageBackground source = {imageLinkModaFeminina} style={{width:'100%', height:150}}>
                    <Text  style={[containers.coresTextoTitulos,containers.textosCentralizados]}>moda feminina</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
                
                
                <View style={containers.containerSecundarios}>
                <Text  style={[containers.coresTextoTitulos,containers.textosCentralizados]}>redes e cartoes que a loja aceita</Text>
                    <View style={containers.alinhamentoVertical}>

                    
                    <TouchableOpacity style={{flex:1}}>
                    <ImageBackground source = {imageLinkRedeSociais} style={{ height:50,margin:5}}>
                    
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1}}>
                    <ImageBackground source = {imageLinkCartoes} style={{ height:50,margin:5}}>
                    
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </View>


              
                <View style={[containers.containerSecundarios]}>
                    
                    <Text    style={[containers.coresTextoTitulos,containers.textosCentralizados]}>menu e barra de pesquisa</Text>
                    <View style={{width:'100%', height:50,flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <View>
                            <TouchableOpacity>
                                <ImageBackground source = {imageMenuPrincipal} style={{width:65,height:40,marginLeft:10}}>

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <ImageBackground source = {imagePesquisa} style={{width:150,height:40,marginLeft:10}}>

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
                
                



          
            
            </ScrollView>
        )
    }
}


export default Home