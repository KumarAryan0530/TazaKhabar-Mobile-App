import React from 'react';
import {Pressable, Text} from 'react-native';

function Aryan({setScreen}) {
  return (
    <Pressable onPress={() => setScreen('auth')}>
      <Text>GO Back to auth</Text>
    </Pressable>
  );
}

export default Aryan;
