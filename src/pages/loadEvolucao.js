import React from 'react';

import { View, Text } from 'react-native';

import api from '../services/api';

export default class LoadEvolucao extends React.Component{
    
    componentDidMount(){
        this.LoadEvolucao();
    }

    pokeNameNavigation = () => {
        const pokeName = this.props.navigation.state.params.name;
        return pokeName;    
    }
    
    LoadEvolucao = async () => {
        const pokeName = this.pokeNameNavigation();
        const response = await api.get(`/evolution-trigger/${pokeName}`);
        const { pokemon_species } = response.data;
        alert(pokemon_species);
    }

    render(){
        return(
            <View>
                <Text>oii</Text>
            </View>
        )
    }
}