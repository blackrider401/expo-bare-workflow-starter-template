import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, Image, View } from "react-native";
import Constants from "expo-constants";
import ApiRequest from "./src/constant/request";
import moment from "moment";
import { ActivityIndicator } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>{Constants.deviceName}</Text>
      <Text style={{ fontSize: 20 }}>Device Name</Text>
      <Text style={{ fontSize: 15 }}>{moment().format("MMMM DD, YYYY")}</Text>
    </View>
  );
};

export default App;
