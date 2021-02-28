import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MyHeader from "../components/MyHeader";
// import { TextInput, Icon } from 'native-base';
// import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'


// const image = { uri: "https://reactjs.org/logo-og.png" };

function Login(props) {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [UserType, setUserType] = useState("")
  const [Page, setPage] = useState("StudentNavigation")
  // ----------------------------------------------  signin    --------------------------------------------------
  const signin = async function () {
    const user = await auth().signInWithEmailAndPassword(Email, Password)
    try {
      alert("signed in succcessfully")
      if (email.length > 0 && password.length > 0) {
        // props.navigation.navigate("MyTabs")
        console.log("auth runing....")
      }
      setEmail("")
      setPassword("")

    }
    catch (e) {
      alert(e)
    }
  }

  function SignIn(props) {
    database().ref('/').child(`Campus Recruitment System List`).set({
      // user: user.name,
      Email: Email,
      Password: Password,
      UserType: UserType
    })
    // props.navigation.navigate("Signup")
  }
  const [btnG1, setbtnG1] = React.useState("#55c9e0");
  const [btnG2, setbtnG2] = React.useState("#55c9e0");
  const [btnG3, setbtnG3] = React.useState("#55c9e0");
  useEffect(() => {
    if (UserType == 'Admin') {
      setbtnG1("#c9a3eb")
      setbtnG2("#55c9e0")
      setbtnG3("#55c9e0")
      setPage("AdminNavigation")
    } else if (UserType == 'Company') {
      setbtnG1("#55c9e0")
      setbtnG2("#c9a3eb")
      setbtnG3("#55c9e0")
      setPage("CompanyNavigation")
    } else if (UserType == 'Student') {
      setbtnG1("#55c9e0")
      setbtnG2("#55c9e0")
      setbtnG3("#c9a3eb")
      setPage("StudentNavigation")
    }

  }, [UserType])
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={require('../image/Sign_in.jpg')} style={styles.image}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Hello, {"\n"}Sign in!</Text>
          </View>
          {/* ...........................Input.................................*/}
          <View style={{ flex: 1, alignItems: 'center', marginTop: 73 }}>
            <View style={styles.inputBox}>
              {/* <Text style={styles.text}>Hello, {"\n"}Sign in!</Text> */}
              <View>
                {/* <Text style={styles.text}>Location</Text> */}
                <View style={{ marginTop: 18, marginBottom: 12, width: 317, borderBottomWidth: 1, borderColor: '#cbcfd0', }}>
                  <TextInput
                    placeholder="User Email"
                    onChangeText={text2 => setEmail(text2)}
                  />
                </View>
                <View style={{ marginTop: 12, marginBottom: 12, width: 317, borderBottomWidth: 1, borderColor: '#cbcfd0', }}>
                  <TextInput
                    placeholder="Password"
                    onChangeText={text2 => setPassword(text2)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* ...........................Radio Button.................................*/}
          <View style={{ flex: 1, alignItems: 'center', marginTop: 53 }}>
            {/* <Text style={styles.text}>Gender</Text> */}
            <View style={styles.btn}>
              <View style={styles.btnG}>
                <Button value="Admin" color={btnG1} onPress={() => setUserType('Admin')} title=" Admin " />
              </View>
              <View style={styles.btnG}>
                <Button value="Company" color={btnG2} onPress={() => setUserType('Company')} title=" Company " />
              </View>
              <View style={styles.btnG}>
                <Button value="Student" color={btnG3} onPress={() => setUserType('Student')} title=" Student " />
              </View>
            </View>
          </View>
          {/* ...........................Sign Button.................................*/}
          <View style={{ flex: 1, alignItems: 'center', marginTop: 13, }}>
            {/* <Text style={styles.text}>Gender</Text> */}
            <View style={styles.btn}>
              <LinearGradient colors={['#c9a3eb', '#6dd3e8', '#55c9e0']} style={styles.linearGradient}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={SignIn}
                >
                  <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
                    Sign in
  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 15, flexDirection: "row", marginLeft: 80, marginBottom: 93 }}>
            <Text style={{ color: '#000', fontSize: 15 }}>Dont have an account? </Text>
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}> */}

            <TouchableOpacity onPress={() => props.navigation.navigate(Page)}>
              <Text style={{ color: '#8757C7', fontSize: 15, fontWeight: 'bold' }}> Sign Up</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputBox: {
    borderRadius: 20,
    borderColor: '#cbcfd0',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: 340,
    alignItems: 'center'
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    margin: 34,
    // width:90
  },
  btnG: {
    margin: 4,
    width: 100
  },
  btn: {
    flexDirection: 'row',
    margin: 2,
  },
  button: {
    alignItems: "center",
    // padding: 3,
    borderRadius: 10,
    width: 153
  },
  linearGradient: {
    marginTop: 23,
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,

  }
});
export default Login;

