import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import moment from 'moment';
import 'moment/locale/bg';

const App = () => {
  const [today, setDate] = React.useState(moment()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(moment());
    }, 100);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const date = today.format('DD MMMM YYYY');
  const day = today.format('dddd');
  const time = today.format('HH:mm:ss');

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.dayText}>{day}</Text>
      <Text style={styles.dateText}>{date}</Text>
      <KeepAwake />
    </View>
  );
};

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
  dayText: {
    color: 'yellowgreen',
    fontSize: 40,
  },
  dateText: {
    color: 'yellowgreen',
    fontSize: 40,
  },
});

export default App;
