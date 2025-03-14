// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default LoginScreen;