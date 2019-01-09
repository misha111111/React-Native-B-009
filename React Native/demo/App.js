import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import FabScreen from './containers/fabs';
import ListIconScreen from './containers/list-icons';

class LoginScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Welcome To Login</Text>
          <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Fab"
          onPress={() => this.props.navigation.navigate('Fab')}
        />
        <Button
          title="ListIcon"
          onPress={() => this.props.navigation.navigate('ListIcon')}
        />
        </View>
      );
    }
  }

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Screen',
        headerStyle: {
            backgroundColor: '#f4511e',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
        <Button
            onPress={() => alert('This is a button!')}
            title="Log Out"
            color="#fff"
        />
        ),
      };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
      screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Fab: {
      screen: FabScreen
  },
  ListIcon: {
      screen: ListIconScreen
  }
}, { initialRouteName: 'Login'});

export default createAppContainer(AppNavigator);