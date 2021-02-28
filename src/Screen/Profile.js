import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import MyHeader from "../components/MyHeader";
function StudentData(props) {
  let Rdata = props.route.params.Rdata

  return (
    <View style={styles.container}>
      <MyHeader navigation={props.navigation} title="Student Profile" />
      {/* <View style={styles.div1}>
        <Image
          source={{ uri: Rdata.Profile }}
          style={{ width: 150, height: 150, borderRadius: 50 }}
        />
      </View> */}
        {/* <Text style={styles.name}>{Rdata.FirstName}</Text> */}
      <View style={{ flex: 2, backgroundColor: '#55c9e0' }}>
        <ScrollView>
        {/* <---------------------Student Name---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Student Name</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.FirstName} {Rdata.LastName}</Text>
          </View>
        </View>
        {/* <---------------------Age---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Age</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.Age}</Text>
          </View>
        </View>
        {/* <---------------------Email---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Email</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.Email}>{Rdata.Email}</Text>
          </View>
        </View>
        {/* <---------------------Gander---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Gender</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.Gender}</Text>
          </View>
        </View>
        {/* <---------------------Phone Number---------------------> */}
        {/* <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Phone No</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.phone}</Text>
          </View>
        </View> */}
        {/* <---------------------Dedline Date---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Job</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.UserType}</Text>
          </View>
        </View>
        {/* <---------------------Adress---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Adress</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.Email}>{Rdata.Address.slice(0, 23)}</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    width: 356,
  },
  div1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE2C2C',
  },
  name: {
    color: 'white',
    margin: 10,
    fontSize: 26,
    fontWeight: "bold"
  },
  CardText: {
    margin: 5,
    marginTop:15,
    marginBottom:15,
    fontSize: 16,
    fontWeight: "bold"
  }, 
   Email: {
    marginTop:15,
    marginBottom:15,
    fontSize: 13,
    fontWeight: "bold"
  },
  Card: {
    backgroundColor: "white",
    margin: 13,
    marginBottom: 0,
    width: 336,
    height: 50,
    borderRadius: 16,
    flexDirection: 'row',
  }
})
export default StudentData;

