import AsyncStorage from '@react-native-async-storage/async-storage';

//todo store start/end pairs separately?

export async function storeData (value: any): Promise<any> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('selected-datstrings', jsonValue); //todo add, don't set
    } catch (e) {
      // saving error
    }
  };
  //todo useEffect with selected as a condition? or better to reformat each time? 
  export async function getData (): Promise<any> {
    try {
      const jsonValue = await AsyncStorage.getItem('selected-datstrings');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };