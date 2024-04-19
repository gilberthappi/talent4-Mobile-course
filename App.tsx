import React from 'react';
import { SafeAreaView } from 'react-native';
import LearnProps from './component/LearnProps';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <LearnProps name="John Doe" age={25} />
    </SafeAreaView>
  )
}