import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Navigation from './src/components/Navigation';
import {AuthProvider} from './src/contexts/AuthContext';
import { TailwindProvider } from 'tailwindcss-react-native';
import CarouselCards from './src/screens/CarouselCards';

const App = () => {
  return (
    <TailwindProvider>
      <AuthProvider>
        <StatusBar backgroundColor="lightblue" />
        <CarouselCards/>
        <Navigation />
      </AuthProvider>
    </TailwindProvider>
  );
};

export default App;