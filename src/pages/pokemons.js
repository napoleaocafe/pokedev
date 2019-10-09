import React from 'react';

import { Text, View, FlatList, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

import api from '../services/api';

export default class Pokemons extends React.Component {
    state = {
        results: [],
    }

    componentDidMount() {
        this.loadPokemons();
    }

    loadLimiteNavigation = () => {
        const limite = this.props.navigation.state.params.data.limite;
        return limite;
    }

    loadGerationNavigation = () => {
        const geration = this.props.navigation.state.params.data.name;
        return geration;
    }

    loadPokemons = async () => {
        const limite = this.loadLimiteNavigation();
        const response = await api.get(`/pokemon/${limite}`);
        const { results } = response.data;
        this.setState({ results });
    }

    renderItem = (item) => {
        const { name } = item;
        const limite = this.loadLimiteNavigation();
        const geration = this.loadGerationNavigation();
        return (
            <TouchableOpacity 
                style={styles.pokeView}
                onPress={() => {this.props.navigation.navigate('PokeInfor', { data: {name, geration} } )} }
            >
                <View style={styles.containerNameImg}>
                    <View style={styles.containerName}>
                        <Text style={styles.pokeName}>{name}</Text>
                    </View>
                    {limite == '?offset=721&limit=86'
                    ?
                    <Image 
                        style={styles.pokeImage} 
                        source={{uri: `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/small/${name}.jpg`}}
                    />
                    :
                    <Image 
                        style={styles.pokeImage} 
                        source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`}}
                    />
                    }
                </View>
                <Image 
                    style={styles.pokeIcon} 
                    source={require('../img/icon.png')}
                />
            </TouchableOpacity>
        );
    }
        
    render() {
        return (
            <ImageBackground source={require('../img/fundo.png')} style={styles.backgrounContainer}>
                    <FlatList
                        style={styles.containerPokedex}
                        data={this.state.results}
                        renderItem={({ item }) => this.renderItem(item)}
                        onEndReachedThreshold={0.1}
                    />
            </ImageBackground>
                )
            }
        };
        
const styles = StyleSheet.create({
    backgrounContainer: {
        flex: 1,
        backgroundColor: '#2d3436',
    },
    containerPokedex: {
        flex: 1,
        padding: 15,
    },
    pokeView: {
        backgroundColor: '#f1f2f6',
        borderBottomRightRadius: 60,
        borderTopRightRadius: 60,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 130,
        marginBottom: 20,
    },
    containerNameImg: {
        width: 210,
        height: 130,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerName: {
        borderTopLeftRadius: 60,
        width: '100%',
        height: 30,
        backgroundColor: '#c62828',
        borderBottomRightRadius: 60,
        borderTopRightRadius: 60,
    },
    pokeName: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pokeImage:{
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    pokeIcon: {
        width: 130,
        height: 130,
    }
})