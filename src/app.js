/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import ArtistList from './ArtistList'
import { getArtists } from './api-client.js'

export default class PlatziMusic extends Component {
  state = {
    artists : []
  }
  componentDidMount() {
    getArtists()
    .then( data => this.setState({ artists: data}) )
  }

  render() {
    const artists = this.state.artists;
    // const artist = {
    //   imagen  : 'https://lastfm-img2.akamaized.net/i/u/770x0/31a51f6e3ec647c8997150ec837891c7.jpg',
    //   name    : 'David Bowie',
    //   likes   : 180,
    //   comments: 5,
    // }
    // const artists  = Array(20).fill(artist);

    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
