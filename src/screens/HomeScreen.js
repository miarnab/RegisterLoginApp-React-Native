import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../contexts/AuthContext';
import { TailwindProvider } from 'tailwindcss-react-native';

const HomeScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center">
        <Spinner visible={isLoading} />
        <Text className="text-lg mb-8">Welcome {userInfo.user.name}</Text>
        <Button title="Logout" color="red" onPress={logout} />
      </View>
    </TailwindProvider>
  );
};

export default HomeScreen;