import React from 'react';
import {QueryClientProvider} from 'react-query';

import RootStackScreen from './navigation';
import {queryClient} from './state';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStackScreen />
    </QueryClientProvider>
  );
};

export default App;
