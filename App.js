import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {LogBox} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


//MY IMPORTS
import Home from './src/views/Home';
import Task from './src/views/Task';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  LogBox.ignoreAllLogs(true)
  return (
    <Routes />
  );
}
