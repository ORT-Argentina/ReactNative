import * as React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { theme } from './src/core/theme';
import App from './src/';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <React.Fragment>
        {Platform.OS === 'web' ? (
          <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
        }
      `}</style>
        ) : null}
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </React.Fragment>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);