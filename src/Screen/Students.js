import React, { useState, useEffect } from 'react';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import database from '@react-native-firebase/database';
import { StyleSheet, View, Image, Text, Button, ScrollView, Pressable } from 'react-native';
import MyHeader from "../components/MyHeader";
import { connect } from "react-redux";
import { facebook_login } from "../reduxConfig/action";

function Card(props) {
  return (
    <View style={styles.app}>
      <Pressable onPress={() => props.navigation.navigate("Profile", { Rdata: props.RData })}>
        <View style={styles.card}>
          <View style={styles.View1}>
              <Text style={{fontSize:23}}>{props.FirstName}</Text>     
             </View>
        </View>
      </Pressable>
    </View>
  )
}

function Blood_Request(props) {
  function BR() {
    props.navigation.navigate("profile")
  }
  const [Requestlist, setRequestlist] = useState({})
  const [user, setUser] = useState({})
  const [count, setCount] = useState(0)

  useEffect((props) => {
    // if (typeof (props.user) != "undefined") {
    //     setUser(props.user)
    //     console.log("useEffect user data",user)
    // }

  })

  useEffect(() => {
    if (count < 2) {
      setCount(count + 1)
      database().ref('/').child("Campus Recruitment System Student details").on('value', snapshot => {
        let Requestlist = [];
        snapshot.forEach(snap => {
          Requestlist.push(snap.val())
        })
        setRequestlist(Requestlist)
        console.log("Requestlist=======>",Requestlist)
      })
    }
  }), [];


  return (
    <View style={styles.container}>
      <MyHeader navigation={props.navigation} title="All Student" />
      <ScrollView>
        {Object.keys(Requestlist).length ?
          <View>
            {Requestlist.map(data => {
              return <Card
                navigation={props.navigation}
                RData={data}
                FirstName={data.FirstName}
                City={data.Adress}
                // DateTime={data.Date.slice(0, 17)} 
                />
            })}
          </View>
          :
          <Text>Looding.....</Text>
        }
      </ScrollView>
      {/* <Button onPress={() => props.navigation.navigate("BR_form")} title="Sent Blood Request" /> */}

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  text: {
    justifyContent: 'center',
    color: 'white',
    alignContent: "center",
    marginLeft: 20,
    fontWeight: "bold"
  },
  // // // // // card
  View1: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  col1: {
    flex: 1,
    backgroundColor: "black",
    borderRadius: 16,
  },
  col1_1: {
    flex: 1,
  },
  col1_text: {
    color: 'white',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
  },
  col1_2: {
    flex: 4,
    backgroundColor: "#DE2C2C",
    borderRadius: 16,
  },
  col2_text: {
    marginTop: 10,
    color: 'white',
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  col2: {
    flex: 3,
    marginLeft: 5,
  },
  col2_1: {
    flex: 1,
  },
  col2_1_text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  col2_2: {
    flex: 2,
  },
  col2_2_text: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 3,
    color: 'black'
  },
  col2_3_text: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 3,
    color: 'black'
  },
  col3_2: {
    justifyContent: 'center',
    alignContent: "center",
    flexDirection: 'row',
  },
  col3_2_1text: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 3,
    color: 'black'
  },
  col3_2_2text: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 3,
    color: '#DE2C2C'
  },

  card: {
    backgroundColor: "white",
    margin: 13,
    marginBottom: 0,
    width: 336,
    height: 60,
    borderRadius: 16,
  }
})

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProp = (dispatch) => {
  return {
    inCerment: () => dispatch(InCerment()),
    // facebook_login: () => dispatch(facebook_login()),
  }
}


export default connect(mapStateToProps, mapDispatchToProp)(Blood_Request);
