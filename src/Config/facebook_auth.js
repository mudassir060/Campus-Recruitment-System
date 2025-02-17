import React, { useState, useEffect } from 'react';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import database from '@react-native-firebase/database';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { facebook_login } from "../reduxConfig/action";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import BR_form from "../Screen/BR_form";
const Tab = createBottomTabNavigator();

function Navigator() {
    return (
        // <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Blood_Doner') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    activeBackgroundColor: '#DE2C2C',
                    inactiveBackgroundColor: '#DE2C2C',
                    labelStyle: {
                        fontSize: 18,
                        margin: 14,
                        padding: 0,
                        fontWeight: 'bold'
                    },
                }}
            >
                <Tab.Screen name="Blood Doner" component={Blood_Doner} />
                <Tab.Screen name="Blood Request" component={Blood_Request} />
                {/* <Tab.Screen name="Request For Blood" component={BR_form} /> */}
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

function Facebook_auth(props) {
    const [user, setUser] = useState({})
    useEffect(() => {
        if (typeof (props.user) != "undefined") {
            setUser(props.user)
        }
    })
    return (
        <>
            {Object.keys(user).length ?
                <Navigator />
                :
                <View style={styles.body}>
                    <View>
                        <Image
                            source={require('../image/BDS.png')}
                            style={{ width: 340, height: 140, marginBottom: 70, marginTop: 100 }}
                        />
                    </View>
                    <View style={styles.block1}>
                        <Button onPress={props.facebook_login} title="Login with facebook" />
                    </View>
                    <View style={styles.block3}>
                        <Text style={{fontWeight: "bold"}}>Powerd By : Mudassir Mukhtar</Text>
                    </View>
                </View>
            }
        </>
    );
};
const styles = StyleSheet.create({

    body: {
        alignItems: 'center',
        marginTop: 50,
        // marginLeft: 30
    },

    block3: {
        justifyContent: 'center',
        alignContent: "center",
        // marginTop:332,
        // position: "absolute",
        bottom: -15,
      },
    block1: {
        width: "70%",

    }

});

// const mapStateToProps = (state) => {
//     const { user } = state;
//     console.log("User in mapStateToProps=====>", user)
//     return {
//         user
//     }
// }
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProp = (dispatch) => {
    return {
        facebook_login: () => dispatch(facebook_login()),
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Facebook_auth);







   // const facebook_Login = () => {
    //     // // Attempt a login using the Facebook login dialog asking for default permissions.
    //     LoginManager.logInWithPermissions(["public_profile"]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 console.log("Login cancelled");
    //             } else {
    //                 let { data } = AccessToken.getCurrentAccessToken()
    //                     .then((data) => {
    //                         // console.log("data====>", data)
    //                         fetch(`https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,email,picture.type(large)`)
    //                             .then((res) => res.json())
    //                             .then((user) => {
    //                                 setUser(user)
    //                                 console.log("user===>", user)
    //                                 database().ref('/').child(`user/${user.id}`).set(user)
    //                             })
    //                     })
    //                 console.log(
    //                     "Login success with permissions: " +
    //                     result.grantedPermissions.toString()
    //                 );
    //             }
    //         },
    //         function (error) {
    //             console.log("Login fail with error: " + error);
    //         }
    //     );
    // }


        // <View style={styles.body}>
                //     <Text>{props.user.id}</Text>
                //     <Text>{props.user.name}</Text>
                //     <Image
                //         source={{ uri: props.user.picture.data.url }}
                //         style={{ width: 200, height: 200, borderRadius: 50 }}
                //     />
                // </View>