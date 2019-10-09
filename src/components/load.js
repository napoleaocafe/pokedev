import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Load extends Component {
  render() {
    return (
      <View style={styles.containerLoad}>
        <View style={styles.loadView}>
            <Text style={styles.loadText}>Loading...</Text>
            <ActivityIndicator size="large" color="#c62828" />
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
    width: '100%',
    height: '100%',  
  },
  loadView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#DDD',
    width: '50%',
    height: 200,  
  },
  loadText: {
      color: '#c62828',
      fontSize: 20,
  }
})
