/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ErrorToast } from 'react-native-toast-message';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Provider } from 'react-redux';
import { VERTICAL_SPACING } from './src/constants/spacing';
import { RootStackScreen } from './src/navigation';
import { store } from './src/redux/store';

const toastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        height: VERTICAL_SPACING * 5,
        borderLeftWidth: 5,
        borderLeftColor: 'red',
      }}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
        paddingVertical: 5,
      }}
      text2NumberOfLines={2}
    />
  ),
};
// npx react-native init GoPalletDriver --template react-native-template-typescript --version 0.70.6
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RootStackScreen />
      </Provider>
      <Toast
        config={toastConfig}
        position="bottom"
        autoHide={true}
        visibilityTime={3000}
        bottomOffset={50}
      />
    </>
  );
};

export default App;