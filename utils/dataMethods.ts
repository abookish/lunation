import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue); //todo add, don't set
    } catch (e) {
      // saving error
    }
  };
  //todo useEffect with selected as a condition? or better to reformat each time? 
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };