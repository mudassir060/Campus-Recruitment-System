import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { Image, View, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function MyHeader(props) {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header
      style={{ backgroundColor: '#6dd3e8' }}
    >
      {/* <Appbar.BackAction onPress={_goBack} /> */}

      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      <Appbar.Content
        title={props.title}
        // subtitle="Subtitle"
        style={{ alignItems: 'center' }}
      />
      {/* <Ionicons name="ios-information-circle"size="12" color="black" />; */}
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {/* <Avatar.Image size={43}  source={require('')} /> */}
      <Pressable onPress={() => props.navigation.navigate('Login')}>
        <Image style={{ width: 54, height: 54 }} source={require('../image/LogOut.jpg')} />
      </Pressable>
    </Appbar.Header>
  )
}
export default MyHeader;