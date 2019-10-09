import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

export default class Pokedex extends React.Component {
renderItem = (name, limite) => {
    return (
      <TouchableOpacity 
          style={styles.pokedexs}
          onPress={() => { this.props.navigation.navigate('Pokemons', {data: {limite, name}}) } }
        >
        {name  == "Kanto" ? <Image style={styles.pokedexImgKanto} source={require(`../img/Kanto.png`)} /> : null}
        {name  == "Johto" ? <Image style={styles.pokedexImg} source={require(`../img/Johto.png`)} /> : null}
        {name  == "Hoenn" ? <Image style={styles.pokedexImgHoenn} source={require(`../img/Hoenn.png`)} /> : null}
        {name  == "Sinnoh" ? <Image style={styles.pokedexImgSinnoh} source={require(`../img/Sinnoh.png`)} /> : null}
        {name  == "Unova" ? <Image style={styles.pokedexImgUnova} source={require(`../img/Unova.png`)} /> : null}
        {name  == "Kalos" ? <Image style={styles.pokedexImg} source={require(`../img/Kalos.png`)} /> : null}
        <Text style={styles.textColorTitle}> 
          {name}
        </Text>
        
      </TouchableOpacity>
    )
  }

  render() {
    return (
        <ScrollView style={styles.containerPokedex}>
          <View style={styles.pokedexRow}>
            {this.renderItem('Kanto', '?offset=0&limit=151')}
            {this.renderItem('Johto', '?offset=151&limit=100')}
          </View>
            
          <View style={styles.pokedexRow}>
            {this.renderItem('Hoenn', '?offset=251&limit=135')}
            {this.renderItem('Sinnoh', '?offset=386&limit=107')}
          </View>
          
          <View style={styles.pokedexRow}>
            {this.renderItem('Unova', '?offset=494&limit=155')}
            {this.renderItem('Kalos', '?offset=649&limit=72')}
          </View>

          <View style={styles.pokedexRow}>
            {this.renderItem('Alola', '?offset=721&limit=86')}
          </View>
        </ScrollView>
    )
  }
};
    
const styles = StyleSheet.create({
  textColorTitle: {
    color: '#ed1e24',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textColorButton: {
    color: '#fff',
  },
  containerPokedex: {
    flex: 1,
    backgroundColor: '#d2dae2',
    padding: 20,
  },
  pokedexs: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    height: '95%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pokedexRow: {
      height: 180,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
  },
  pokedexImgKanto: {
    height: 100,
    width: 150,
  },
  pokedexImg: {
    height: 100,
    width: 100,
  },
  pokedexImgHoenn: {
    height: 135,
    width: 115,
  },
  pokedexImgUnova: {
    height: 135,
    width: 115,
  },
  pokedexImgSinnoh: {
    height: 110,
    width: 135,
  }
});