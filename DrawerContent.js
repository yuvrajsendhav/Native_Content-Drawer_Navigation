import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={{ marginTop: 15}}>
            <Avatar.Image
              style={{alignSelf: 'center'}}
              source={{
                uri: 'https://media.istockphoto.com/photos/reflections-on-a-lake-picture-id474267374?k=20&m=474267374&s=612x612&w=0&h=xE6-x8HQBxiyWWxin8p7V88X54MOXLW3vACwyMDZZJc=',
              }}
              size={100}
            />
            <View
              style={{marginLeft: 15, flexDirection: 'column'}}>
              <Title  style={styles.title}>Yuvraj Thakur</Title>
              <Caption style={styles.caption}>@YuvrajThakur</Caption>
            </View>
            <View >
                <Text style={{textAlign:'center'}}><Text> 5M Follower </Text><Text> 0 Following </Text></Text>
              {/* <View>
                <Paragraph>0</Paragraph>
                <Caption>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph>5 M</Paragraph>
                <Caption>Followers</Caption>
              </View> */}
            </View>
          </View>
        </View>
        <View style={{marginTop: 45}}>
          <Drawer.Section>
            <DrawerItem
              style={{backgroundColor: '#670abf'}}
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              labelStyle={{fontSize:18,fontWeight:'bold',color:'white'}}
              onPress={() => {
                props.navigation.navigate('Home');
              }}></DrawerItem>
            <DrawerItem
              style={{backgroundColor: '#670abf'}}
              icon={({color, size}) => (
                <Icon
                  name="account-details-outline"
                  color={color}
                  size={size}
                />
              )}
              label="About"
              labelStyle={{fontSize:18,fontWeight:'bold',color:'white'}}
              onPress={() => {
                props.navigation.navigate('About');
              }}></DrawerItem>
            <DrawerItem
              style={{backgroundColor: '#670abf'}}
              icon={({color, size}) => (
                <Icon name="phone-in-talk" color={color} size={size} />
              )}
              label="Contacts"
              labelStyle={{fontSize:18,fontWeight:'bold',color:'white'}}
              onPress={() => {
                props.navigation.navigate('Contacts');
              }}></DrawerItem>
            <DrawerItem
              style={{backgroundColor: '#670abf'}}
              icon={({color, size}) => (
                <Icon name="room-service" color={color} size={size} />
              )}
              label="Service"
              labelStyle={{fontSize:18,fontWeight:'bold',color:'white'}}
              onPress={() => {
                props.navigation.navigate('Service');
              }}></DrawerItem>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    textAlign:'center'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    textAlign:'center'
  },
  
});
