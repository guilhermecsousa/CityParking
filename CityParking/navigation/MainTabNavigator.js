import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Titles from '../screens/Titles';
import Profile from '../screens/Profile';
import Park from '../screens/Park';
import Bills from '../screens/Bills'
import Pay from '../screens/Pay';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SearchStack = createStackNavigator(
  {
    Search: HomeScreen,
    Reservar : Park,
    Pay: Pay
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Pesquisa',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
};

SearchStack.path = '';

const TitlesStack = createStackNavigator(
  {
    Titles: Titles,
  },
  config
);

TitlesStack.navigationOptions = {
  tabBarLabel: 'Títulos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-menu'
      }
    />
  ),
};

TitlesStack.path = '';

const BillsStack = createStackNavigator(
  {
    Bills: Bills,
  },
  config
);

BillsStack.navigationOptions = {
  tabBarLabel: 'Faturas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-archive'} />
  ),
};

BillsStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SearchStack,
  TitlesStack,
  BillsStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
