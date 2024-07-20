import { Button, Image, Platform } from 'react-native';
import React, {useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CalendarSelections, markedDates } from '@/components/CalendarSelections';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirstDayLastPeriodString } from '@/utils/dateObjectMethods';



const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

export default function HomeScreen() {
 

  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{Object.keys(markedDates)}</ThemedText>
        <HelloWave />
      </ThemedView>
      
   <CalendarSelections />
   <Button title="clear" onPress={clearAsyncStorage}>
</Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
