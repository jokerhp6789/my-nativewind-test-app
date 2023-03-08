import React from 'react';
import {View, ScrollView, Text} from 'react-native';

export interface IHomeScreenProps {
  [key: string]: any;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({id}) => {
  return (
    <ScrollView
      horizontal
      className="bg-neutral-300 dark:bg-slate-900 flex-row gap-4">
      <Text className="text-4xl">Native Wind Test</Text>
      <Text>Native Wind Test</Text>
      <Text>Native Wind Test</Text>
      <Text>Native Wind Test</Text>
    </ScrollView>
  );
};

export default HomeScreen;
