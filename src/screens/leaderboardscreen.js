import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREEN_WIDTH } from '../utils/dimensions';

const LeaderboardScreen = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = JSON.parse(await AsyncStorage.getItem('leaderboard')) || [];
      setLeaderboard(data.sort((a, b) => b.score - a.score));
    };

    fetchLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.rank}>{index + 1}.</Text>
            <Text style={styles.score}>Score: {item.score}</Text>
            {/* <Text style={styles.difficulty}>Level: {item.difficulty}</Text> */}
          </View>
        )}
      />
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#665f6b',
  },
  title: {
    marginTop:30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a591b5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#36313b',
  },
  score: {
    fontSize: 18,
    color: '#2c2136',
  },
  difficulty: {
    fontSize: 16,
    color: '#4a3f5e',
  },
});