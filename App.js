import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import KeepAwake from 'react-native-keep-awake';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: 'yellowgreen',
    fontSize: 60,
  },
  dateText: {
    color: 'yellowgreen',
    fontSize: 40,
  },
});

export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      time: moment().format('LTS'),
      date: moment().format('LL'),
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format('LTS'),
        date: moment().format('LL'),
      });
    }, 1000);

    return (
      <View style={styles.container}>
        <StatusBar style={{ backgroundColor: 'transparent' }} />
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>

        <KeepAwake />
      </View>
    );
  }
}
