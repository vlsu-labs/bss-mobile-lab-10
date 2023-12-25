import React, { Component, useState } from "react"
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function First() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Second() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="First"
        component={FirstApp}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="Second"
        component={SecondApp}
        options={{
          tabBarLabel: 'Updates'
        }}
      />
    </Tab.Navigator>
  );
}

class FirstApp extends Component {
  constructor(props) {
    super(props);
    this.state = { pressing: false };
  }
    _onPressIn = () => {
    this.setState({ pressing: true });
  };
    _onPressOut = () => {
    this.setState({ pressing: false });
  };
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight
        onPressIn={this._onPressIn}
        onPressOut={this._onPressOut}
        style={styles.touchable}
      >
      <View style={styles.button}>
      
      {
        this.state.pressing && 
        <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      }
      {
        !this.state.pressing && 
        <Text style={styles.welcome}>
      {"НИЧЕГО"}
      </Text>
      }
      
      </View>
      </TouchableHighlight>
      </View>
    );
    }
 }

 const DATA = [
  {img: 'https://reactnative.dev/img/tiny_logo.png', description: 'dessasdasd', key: 'Book a'},
  {img: 'https://reactnative.dev/img/tiny_logo.png', description: 'dessasdasd', key: 'Book b'},
  {img: 'https://reactnative.dev/img/tiny_logo.png', description: 'dessasdasd', key: 'Bok c'},
  {img: 'https://reactnative.dev/img/tiny_logo.png', description: 'dessasdasd', key: 'Book d'},
  {img: 'https://reactnative.dev/img/tiny_logo.png', description: 'dessasdasd', key: 'Book longer example'},
  {img: 'https://reactnative.dev/img/tiny_logo.png', description: 'dessasdasd', key: 'Book'}
];

 const SecondApp = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [isActive, setIsActive] = useState(false);
  shift = {value: 1}
  const renderItem = data => {
    return (
      // <Pressable

      // onLongPress={()=>{
      //   console.log(DATA)
      //   console.log(data.item.key)
      //   const a = DATA.findIndex(v => v.key === data.item.key)
      //   console.log(a)
      //   DATA.splice(a, 1);
      //   console.log(DATA)
      //   setSelectedId(data.item.key)
      // }}
      // >
        <Pressable
        style={{
          backgroundColor: isActive ? 'salmon' : 'green'
        }}
          id={"press_"+data.item.id}
          onPress={()=>{
            setIsActive(current => !current);
          }}
          
          >
      <View style={styles.row}  >
        <Image
          style={styles.row_image}
          source={{
            uri: data.item.img,
          }}
        />
      <Text style={styles.row_title}>{data.item.key}</Text>
      <Text>{data.item.description}</Text>
      </View>
      </Pressable>
    );
    };

  return (
    <View style={styles.container}>
  <FlatList data={DATA} renderItem={renderItem} extraData={selectedId} keyExtractor={item => item.key}/>
  </View>
  );
};

 const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300
  },
  row_title: {
    fontSize: 20
  },
  row_image: {
    height: 100,
    width: 100
  },
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF"
   },
  welcome: { fontSize: 20, textAlign: "center", margin: 10, color: "#FFFFFF" },
  touchable: { borderRadius: 100 },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 1,
    height: 200,
    width: 200,
    justifyContent: "center"
   },
   row: {fontSize: 24, padding: 42, borderWidth: 1, borderColor: '#DDDDDD'}
  });

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer> 
  );
}
