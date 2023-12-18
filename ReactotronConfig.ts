import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
declare global {
  interface Console {
    tron: any;
  }
}

let reactotron: any = {log: () => {}};

if (__DEV__) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'KSTMDB',
    })
    .useReactNative()
    .connect();
  console.tron = Reactotron;
  // Reactotron.clear?.();
  // console.tron = Reactotron;
}

export default reactotron;
