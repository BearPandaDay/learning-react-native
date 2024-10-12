import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModel, DimensionScreen } from '../src/presentation/screens';
import { StylesApp } from './StylesApp';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {

  const stylesApp = StylesApp();

  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props}/>}}>
      <SafeAreaView style={{...stylesApp.styleSafeAreaView}}>
        {/* <BoxObjectModel /> */}
        <DimensionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
