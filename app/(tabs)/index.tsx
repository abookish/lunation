import { Button, Image, Platform } from 'react-native';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CalendarSelections } from '@/components/CalendarSelections';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '@/utils/dataMethods';



//todo put things in parent to pass them around? can I update parent things from child?
// fetch prev selected
//pass to calendar
//todo store this somewhere instead of recalcing constantly getDateObjectsForStartDates
//from calender pass selected which is now updated to some dateObjects constructor
//some calculation object?
//pass marked days back up to Parent somehow?

const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

export default function HomeScreen() {

  const [stored, setStored] = useState<string[]>([])
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false)

const fetchData = async () => { //todo make this get/fetch combo more concise or something
  const data = await getData()
  console.log(data)
  if (data?.length > 0) 
    {setStored(data)}
  setDataLoaded(true)
}

useEffect( () => {
  console.log("trying to fetch")
  fetchData()
  console.log(stored)
}, []);

 if (!dataLoaded) {
  return "Fetching data"
 }

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
        <ThemedText type="title">{"Hello World"}</ThemedText>
        <HelloWave />
      </ThemedView>
      
   <CalendarSelections selected={stored}/>
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
