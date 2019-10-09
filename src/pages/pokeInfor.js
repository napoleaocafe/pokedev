import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import api from '../services/api';

import Load from '../components/load';

export default class PokeInfor extends React.Component {
    state = {
        types: [{ type: { name: 'a' } }],
        name: [],
        id: [],
        height: [],
        weight: [],
        ImageState: true,
        stats: [],
        load: true,
    }

    componentDidMount(){
        this.loadPokemons();
    }

    loadNamePokemonsNavigation = () => {
        const namePokemons = this.props.navigation.state.params.data.name;
        return namePokemons;
    }

    loadGerationNavigation = () => {
        const geration = this.props.navigation.state.params.data.geration;
         return geration;
    }

    loadPokemons = async () => {
        const namePokemons = this.loadNamePokemonsNavigation();
        const response = await api.get(`/pokemon/${namePokemons}`);
        const { types, name, id, weight, height, stats } = response.data;
        await this.setState({
            types: types.reverse(),
            name,
            id,
            height: height/10,
            weight: weight/10,
            load: false,
            stats: 
                stats.map(status =>{
                    const { name } = status.stat;
                    const { base_stat } = status;
                    if (name == 'speed') {
                        return (
                            {number: base_stat, name: 'Velocidade'}
                        )
                    }
                    if ((name == 'special-attack') || (name == 'special-defense')) {
                        return {number: null, name: null}
                    } 
                    if (name == 'defense') {
                        return (
                            {number: base_stat, name: 'Defesa'}
                      )
                    }
                    if (name == 'attack') {
                        return (
                            {number: base_stat, name: 'Ataque'}
                      )
                    }
                    if (name == 'hp') {
                        return (
                            {number: base_stat, name: 'Vida'} 
                     )
                    }
                })
        });
        
    }

    giraImage = (item) => {
        this.setState({ ImageState: item });
    }

    renderItem() {
        const geration = this.loadGerationNavigation();
        const { name, types, height, weight, id, ImageState, stats, load } = this.state;
        const [type] = types;
        const stylesType = eval(`styles.${type.type.name}`);
        const front = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const shiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
        if(load == true){ 
            return <Load />
        }else{
            return(
            <View style={styles.pokeContainer}>
                <View style={[styles.pokeMainContainer, stylesType]}>
                    <View style={styles.pokeHead}>
                        <View style={styles.pokeTexts}>
                            <Text style={styles.pokeName}>{name} # {id}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.buttonSprites}
                            onPress={() => {this.props.navigation.navigate('Sprites', {data: { name, geration} } )}}>
                            <Text>sprites</Text>
                            <Image style={styles.iconBall} source={require('../img/iconball.png')}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.pokeImagesContainer} onPress={() => this.giraImage(!ImageState)}>
                        <ImageBackground style={styles.pokeballImage} source={require(`../img/pokicon.png`)}>
                            {ImageState == true
                                ?
                                <Image source={{ uri: front }} style={styles.pokeImage} />
                                :
                                <Image source={{ uri: shiny }} style={styles.pokeImage} />
                            }
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.pokeInformes}>
                    <Text style={styles.pokeInfor}>Altura: {height}m</Text>
                    <Text style={styles.pokeInfor}>Peso: {weight}kg</Text>
                    <View style={styles.informeStatus}>
                        {
                            stats.map(stat => {
                                if(stat.number == null){
                                    return (
                                        null
                                    )
                                }
                                if(stat.number <= 25){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusBaixo1Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 25) && (stat.number <= 35)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusBaixo2Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 35) && (stat.number <= 45)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusBaixo3Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 45) && (stat.number <= 55)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusMedio1Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 55) && (stat.number <= 65)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusMedio2Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 65) && (stat.number <= 75)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusBom1Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 75) && (stat.number <= 85)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusBom2Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if((stat.number > 85) && (stat.number <= 95)){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusBom3Color]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                if(stat.number > 95){
                                    return (
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.pokeStatus}>{stat.name}</Text>
                                            <View style={styles.barraStatusTotal}>
                                                <View style={[styles.barraStatus, styles.statusAltoColor]}>
                                                    <Text style={styles.valueStatus}>{stat.number}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                            })
                        }
                    </View>
                    <View style={styles.typesContainer}>
                        {types.map(item => {
                            const typeName = item.type.name;
                            const styleColor = eval(`styles.${item.type.name}`);
                            return (
                                <View style={[styleColor, styles.pokeTypesBarra]}>
                                    <Text style={styles.nameType}>{typeName}</Text>
                                </View>
                            )
                        }
                        )}
                    </View>
                    <TouchableOpacity
                        style={styles.pokeTabContainer}
                        onPress={() => { this.props.navigation.navigate('evolucão', { id: id }) }}
                    >
                        <Text>Evoluções</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    };


    render(){
        return(
            this.renderItem()
        )
    };
};

const styles = StyleSheet.create({
    pokeContainer: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    pokeMainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#7f8c8d',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '50%',
    },
    pokeHead: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pokeTexts: {
        height: '25%',
        width: '70%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    pokeName: {
        fontSize: 30,
        color: '#fff'
    },
    buttonSprites: {
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        height: '100%',
        width: '30%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
    },
    iconBall: {
        width: '50%',
        height: '90%'
    },
    pokeImagesContainer: {
        width: '60%',
        height: '75%',
    },
    pokeballImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    pokeInformes: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: '#f1f2f6',
    },
    pokeInfor: {
        fontSize: 14,
    },
    informeStatus: {
        flexDirection: 'column-reverse',
        width: '90%',
    },
    statusContainer: {
        marginBottom: 10,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pokeStatus: {
        fontSize: 14,
        color: '#000'
    },
    barraStatusTotal: {
        backgroundColor: '#808080',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 15,
        width: 250,
    },
    barraStatus: {
        borderRadius: 15,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueStatus: {
        color: '#fff',
    },
    statusBaixo1Color: {
        backgroundColor: '#d35400',
        width: '25%',
    },
    statusBaixo2Color: {
        backgroundColor: '#d35400',
        width: '35%',
    },
    statusBaixo3Color: {
        backgroundColor: '#d35400',
        width: '45%',
    },
    statusMedio1Color: {
        backgroundColor: '#f6b93b',
        width: '55%',
    },
    statusMedio2Color: {
        backgroundColor: '#f6b93b',
        width: '65%',
    },
    statusBom1Color: {
        backgroundColor: '#3498db',
        width: '75%',
    },
    statusBom2Color: {
        backgroundColor: '#3498db',
        width: '85%',
    },
    statusBom3Color: {
        backgroundColor: '#3498db',
        width: '90%',
    },
    statusAltoColor: {
        backgroundColor: '#2ecc71',
        width: '100%',
    },
    typesContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '95%',
    },
    pokeTypesBarra: {
        height: 30,
        borderRadius: 12,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameType: {
        color: '#fff',
    },
    pokeTabContainer: {
        width: '50%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#000',
    },
    grass: {
        backgroundColor: '#7c5'
    },
    poison: {
        backgroundColor: '#a59'
    },
    water: {
        backgroundColor: '#39f'
    },
    fire: {
        backgroundColor: '#f42'
    },
    bug: {
        backgroundColor: '#ab2'
    },
    normal: {
        backgroundColor: '#aa9'
    },
    ghost: {
        backgroundColor: '#66b'
    },
    dragon: {
        backgroundColor: '#76e'
    },
    psychic: {
        backgroundColor: '#f59'
    },
    fighting: {
        backgroundColor: '#b54'
    },
    flying: {
        backgroundColor: '#89f'
    },
    rock: {
        backgroundColor: '#ba6'
    },
    steel: {
        backgroundColor: '#aab'
    },
    ice: {
        backgroundColor: '#6cf'
    },
    ground: {
        backgroundColor: '#db5'
    },
    dark: {
        backgroundColor: '#754'
    },
    electric: {
        backgroundColor: '#fc3'
    },
    fairy: {
        backgroundColor: '#e9e'
    },
});