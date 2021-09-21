import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Container from "../components/Container";
import PlantBackground from "../components/PlantBackground";
import MissionCard from "../components/MissionCard";
import ChakraPetchBoldText from "../components/Text/ChakraPetchBoldText";
import BackButton from "../components/BackButton";
import colors from "../utils/colors";

export default function MissionScreen({ navigation }) {
  return (
    <Container style={{ alignItems: "center" }}>
      <PlantBackground />
      <BackButton navigation={navigation} />
      <ChakraPetchBoldText
        style={{
          fontSize: 40,
          color: colors.main,
          textShadowOffset: { width: 3, height: 3 },
          textShadowRadius: 0,
          textShadowColor: "white",
        }}
      >
        MISSION
      </ChakraPetchBoldText>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MissionCard
          navigation={navigation}
          title={"Smile everyday"}
          description={
            "Smiling Helps You Live Longer, Smiling Relieves Stress, Smiling Elevates Mood..."
          }
          image={require("../assets/images/mission/smile.png")}
          onPress={() => {
            // navigation.navigate('FaceDetection');
          }}
        />
        <MissionCard
          navigation={navigation}
          style={{ marginLeft: 10 }}
          title={"Exercise 15 mins"}
          description={
            "Exercise controls weight, Exercise combats health conditions and diseases..."
          }
          image={require("../assets/images/mission/exercise.png")}
          onPress={() => {
            navigation.navigate("TensorCamera");
          }}
        />
        <MissionCard
          navigation={navigation}
          style={{ marginLeft: 10 }}
          title={"Walking around"}
          description={
            "Improve Circulation, Shore Up Your Bones, Enjoy a Longer Life, Lighten Your Mood..."
          }
          image={require("../assets/images/mission/walking.png")}
          onPress={() => {
            navigation.navigate("MissionDetail");
          }}
        />
      </View>
    </Container>
  );
}
