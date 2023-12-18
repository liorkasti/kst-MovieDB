import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
declare global {
  interface Console {
    tron: any;
  }
}

// AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
let reactotron: any = {log: () => {}}; // for release builds

if (__DEV__) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'KSTMDB',
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
  console.tron = Reactotron;
  // reactotron = Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  //   .configure({
  //     name: 'YAD 2',
  //     host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
  //   })
  //   .use(reactotronRedux())
  //   .use(sagaPlugin({}))
  //   .useReactNative({
  //     asyncStorage: false, // there are more options to the async storage.
  //     networking: {
  //       // optionally, you can turn it off with false.
  //       ignoreUrls: /symbolicate/,
  //     },
  //     editor: false, // there are more options to editor
  //     // errors: { veto: (stackFrame: any) => false }, // or turn it off with false
  //     overlay: false, // just turning off overlay
  //   })
  //   .connect();

  Reactotron.clear?.();
  console.tron = Reactotron;
}

export default reactotron;
