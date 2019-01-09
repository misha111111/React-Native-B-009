import React from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';

export default class Login extends React.Component{
  render(){
    return (
      <View>
        <Text>Welcome to Login</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}}>
            <Text>User Name</Text>
          </View>
          <View style={{width:150, height: 50, backgroundColor: 'skyblue'}}>
            <TextInput
              style={{height: 40, width: 150}}
              placeholder="UserName"
            />
          </View>
        </View>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Login "
        />
      </View>
    );
  }
}
