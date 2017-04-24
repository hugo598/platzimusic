/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends Component {
  render() {
    const {image, name, likes, comments} = this.props.artist;

    return (

      <View style={styles.artistBox}>
        <Image style={styles.image}source={{ uri : image }}/>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="lightgray" />
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="lightgray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    height: 150,
    width: 150,
  },
  artistBox:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor : 'black',
    shadowOpacity: .3,
    margin: 5,
    shadowOffset:{
      height: 1,
      width: -2,
    },
    elevation: 4,
  },
  info:{
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  name:{
    fontSize:20,
    marginTop: 10
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },
  iconContainer :{
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'gray',
  }

});
