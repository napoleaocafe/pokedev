import React from 'react';

import { createStackNavigator, createAppContainer} from 'react-navigation';

import Pokedex from './pages/pokedex';

import Pokemons from './pages/pokemons';

import PokeInfor from './pages/pokeInfor';

import Evolucao from './pages/evolução';

import LoadEvolucao from './pages/loadEvolucao';

import Sprites from './pages/sprites';

const Router = createStackNavigator(
    {
        Home: Pokedex,
        Pokemons,
        PokeInfor,
        Evolucao,
        LoadEvolucao,
        Sprites
    },
    {
        initialRouteName: "Home",

        defaultNavigationOptions: {
            title: 'Pokedex',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#ed1e24',
            },
        },
    }
)

export default createAppContainer(Router);