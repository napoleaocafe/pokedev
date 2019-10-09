import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default class Sprites extends React.Component {
    state = {
        sprites: [
            { name: 'teste', url: 'teste' },
            { name: 'teste', url: 'teste' },
            { name: 'teste', url: 'teste' },
            { name: 'teste', url: 'teste' },
            { name: 'teste', url: 'teste' },
            { name: 'teste', url: 'teste' },
            { name: 'teste', url: 'teste' },
        ],
        imageLoading: true,
        erro: false,
    }

    componentDidMount() {
        this.spritesState();
    }

    loadNameNavigation = () => {
        const pokeName = this.props.navigation.state.params.data.name;
        return pokeName;
    }

    loadGerationNavigation = () => {
        const geration = this.props.navigation.state.params.data.geration;
        return geration;
    }


    spritesState = () => {
        const pokeName = this.loadNameNavigation();
        const geration = this.loadGerationNavigation();
        if(geration == 'Kanto'){
            this.setState({
                sprites: [
                    { name: 'Primeira geração', url: `https://img.pokemondb.net/sprites/red-blue/normal/${pokeName}.png` },
                    { name: 'Segunda geração', url: `https://img.pokemondb.net/sprites/silver/normal/${pokeName}.png` },
                    { name: 'Terceira geração', url: `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokeName}.png` },
                    { name: 'Quarta geração', url: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokeName}.png` },
                    { name: 'Quinta geração', url: `https://img.pokemondb.net/sprites/black-white/normal/${pokeName}.png` },
                    { name: 'Sexta geração', url: `https://img.pokemondb.net/sprites/x-y/normal/${pokeName}.png` },
                ]
            })
        }
        if(geration == 'Johto'){
            this.setState({
                sprites: [
                    { name: 'Segunda geração', url: `https://img.pokemondb.net/sprites/silver/normal/${pokeName}.png` },
                    { name: 'Terceira geração', url: `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokeName}.png` },
                    { name: 'Quarta geração', url: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokeName}.png` },
                    { name: 'Quinta geração', url: `https://img.pokemondb.net/sprites/black-white/normal/${pokeName}.png` },
                    { name: 'Sexta geração', url: `https://img.pokemondb.net/sprites/x-y/normal/${pokeName}.png` },
                ]
            })
        }
        if(geration == 'Hoenn'){
            this.setState({
                sprites: [
                    { name: 'Terceira geração', url: `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokeName}.png` },
                    { name: 'Quarta geração', url: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokeName}.png` },
                    { name: 'Quinta geração', url: `https://img.pokemondb.net/sprites/black-white/normal/${pokeName}.png` },
                    { name: 'Sexta geração', url: `https://img.pokemondb.net/sprites/x-y/normal/${pokeName}.png` },
                ]
            })
        }
        if(geration == 'Sinnoh'){
            this.setState({
                sprites: [
                    { name: 'Quarta geração', url: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokeName}.png` },
                    { name: 'Quinta geração', url: `https://img.pokemondb.net/sprites/black-white/normal/${pokeName}.png` },
                    { name: 'Sexta geração', url: `https://img.pokemondb.net/sprites/x-y/normal/${pokeName}.png` },
                ]
            })
        }
        if(geration == 'Unova'){
            this.setState({
                sprites: [
                    { name: 'Quinta geração', url: `https://img.pokemondb.net/sprites/black-white/normal/${pokeName}.png` },
                    { name: 'Sexta geração', url: `https://img.pokemondb.net/sprites/x-y/normal/${pokeName}.png` },
                ]
            })
        }
        if(geration == 'Kalos'){
            this.setState({
                sprites: [
                    { name: 'Sexta geração', url: `https://img.pokemondb.net/sprites/x-y/normal/${pokeName}.png` },
                ]
            })
        }
        if(geration == 'Alola'){
            this.setState({
                sprites: [
                    { name: 'Setima geração', url: `https://img.pokemondb.net/sprites/sun-moon/normal/${pokeName}.png` },
                ]
            })
        }
    }

    render() {
        const pokeName = this.loadNameNavigation();
        const { sprites } = this.state;
        return (
            <View style={styles.pokeMain}>
                <ScrollView style={styles.pokeScroll}>
                    <Text>{pokeName}</Text>
                    {sprites.map( sprite => (
                        <View style={styles.pokeContainer}>
                            <Text>{sprite.name}</Text>
                            <Image
                                style={styles.pokeImage}
                                source={{ uri: sprite.url }}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pokeMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokeScroll: {
        width: '60%',
        height: '100%',
    },
    pokeContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    pokeImage: {
        width: 130,
        height: 130
    }
})