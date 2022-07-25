import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen, RewardsScreen, ProfileScreen, NetworkScreen } from "../../components"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// https://fontawesome.com/v6/icons/circle-nodes?s=solid
import {
  faSearch,
  faUser,
  faStar,
  faCircleNodes
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

function Search() {
  return (
    <SearchScreen />
  );
}

function Rewards() {
  return (
    <RewardsScreen />
  );
}

function Network() {
  return (
    <NetworkScreen />
  );
}

function Profile() {
  return (
    <ProfileScreen />
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ],
        headerTitleAlign: "center",
        tabBarActiveTintColor: '#e91e63'
      }}>

      <Tab.Screen name="Search" component={Search} 
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faSearch} size={size} style={{ color: color }} />
            // <MaterialCommunityIcons name="alien" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="Rewards" component={Rewards}
        options={{
          tabBarLabel: 'Rewards',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faStar} size={size} style={{ color: color }} />
          ),
        }}
      />

      <Tab.Screen name="Network" component={Network}
        options={{
          tabBarLabel: 'Network',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCircleNodes} size={size} style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} style={{ color: color }} />
            // <FontAwesome name="fa-mug-hot" size={24} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}