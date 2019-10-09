import React from 'react';

import { View, ScrollView, Text, ImageBackground, StyleSheet, Image } from 'react-native';

import Load from '../components/load';

import api from '../services/api';

export default class Evolucao extends React.Component{
    state = {
        evolucoes: [
            {evolucao1: 'teste'}, 
            {evolucao2: 'teste'},
            {evolucao3: 'teste'}
        ],
        load: true
    }
    componentDidMount(){
        this.loadEvolucoes();
    }

    idNavigation = () => {
        const pokeId = this.props.navigation.state.params.id;
        if((pokeId >= 21) && (pokeId <= 28)){
            return Math.ceil(Math.ceil(pokeId/3) + 0.1);
        }else{
            return Math.ceil(pokeId/3);
        }
    }

    loadEvolucoes = async () => {
        const pokeId = this.idNavigation();
        const response = await api.get(`/evolution-chain/${pokeId}`)
        const { chain  } = response.data;
        const { species, evolves_to } = chain;
        
        
        if(pokeId <= 6){
            this.setState({
                evolucoes:[ 
                    {evolucao1: species.name}, 
                    {evolucao2: evolves_to[0].species.name},
                    {evolucao3: evolves_to[0].evolves_to[0].species.name}
                ]
            })
        }
        if((pokeId > 6) && (pokeId <= 11)){
            this.setState({
                evolucoes:[ 
                    {evolucao1: species.name}, 
                    {evolucao2: evolves_to[0].species.name},
                    {evolucao3: evolves_to[0].evolves_to[0].species.name}
                ]
            })
        }
        
        this.setState({
            load: false
        })
    } 
  
    renderItens = () => {
        const namePrimeira = this.state.evolucoes[0].evolucao1;
        const nameSegunda = this.state.evolucoes[1].evolucao2;
        const nameTerceira = this.state.evolucoes[2].evolucao3;
        return(
        this.state.load == true
        ?
        <Load />  
        :
        <ScrollView>
            <Text>
                {namePrimeira}
            </Text>
            <Image style={styles.pokeImg} source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${namePrimeira}.png`}} />
            <Text>
                {nameSegunda}
            </Text>
            <Image style={styles.pokeImg} source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${nameSegunda}.png`}} />
            <Text>
                {nameTerceira}
            </Text>
            <Image style={styles.pokeImg} source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${nameTerceira}.png`}} />
        </ScrollView>
       ) 
    }
    render(){
        return(
        <ImageBackground style={styles.pokeBackground} source={require('../img/fundo.png')}>
          {this.renderItens()}
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    pokeBackground: {
        flex: 1,
        // backgroundColor: '#000',
    },
    pokeImg: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
})