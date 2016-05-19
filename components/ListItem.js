'use strict';
// import  React { Component } from 'react-native'
// import styles from '../styles.js'
// import { View, TouchableHighlight, Text } from React;

import React, {
  Component,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import styles from '../styles.js'

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
module.exports = ListItem;
