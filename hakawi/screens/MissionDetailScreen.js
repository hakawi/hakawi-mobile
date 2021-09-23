import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Container from "../components/Container";
import PlantBackground from "../components/PlantBackground";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import RNLocation from "react-native-location";
import * as Location from "expo-location";
import ChakraPetchBoldText from "../components/Text/ChakraPetchBoldText";
import ChakraPetchRegularText from "../components/Text/ChakraPetchRegularText";

const CHECK_METTER = 20;
const CHECK_TIMES = 10;

export default function MissionDetailScreen({ navigation }) {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentLocations, setCurrentLocations] = useState(null);
  const [firstLocation, setFirstLocation] = useState(null);
  const [numberOfCheck, setNumberOfCheck] = useState(0);
  const requestRef = React.useRef();
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    console.log("currentLocations", currentLocations);
    if (!firstLocation) {
      setFirstLocation(currentLocations);
    }
    if (firstLocation && currentMeasure() < CHECK_METTER) {
      setNumberOfCheck(0);
    }
    if (firstLocation && currentMeasure() >= CHECK_METTER) {
      setNumberOfCheck(numberOfCheck + 1);
      if (numberOfCheck >= CHECK_TIMES) {
        setCurrentLocations(null);
        setFirstLocation(null);
        navigation.navigate("Completed");
      }
    }
  }, [currentLocations]);

  const measure = (lat1, lon1, lat2, lon2) => {
    // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000; // meters
  };

  const currentMeasure = () => {
    return measure(
      firstLocation.latitude,
      firstLocation.longitude,
      currentLocations.latitude,
      currentLocations.longitude
    );
  };

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 1,
      desiredAccuracy: {
        ios: "best",
        android: "balancedPowerAccuracy",
      },
    });
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse",
      },
    }).then((granted) => {
      if (!granted) {
        async () => {
          await Location.requestForegroundPermissionsAsync();
        };
      }
      if (granted) {
        const locationSubscription = RNLocation.subscribeToLocationUpdates(
          (locations) => {
            setCurrentLocations(locations[0]);
          }
        );
      }
    });
  });

  return (
    <Container style={{ alignItems: "center" }}>
      <PlantBackground />
      <BackButton navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Card style={{ flex: 1, margin: 30, marginTop: 60 }} height={250}>
          {currentLocations ? (
            <View style={{ flexDirection: "row" }}>
              <View>
                <View>
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                    }}
                  >
                    Speed
                  </ChakraPetchBoldText>
                  <ChakraPetchRegularText
                    style={{
                      fontSize: 13,
                      color: colors.main,
                      marginTop: 5,
                    }}
                  >
                    {currentLocations.speed ?? "Not avaiable"}
                  </ChakraPetchRegularText>
                </View>
                <View>
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                      marginTop: 5,
                    }}
                  >
                    Longitude
                  </ChakraPetchBoldText>
                  <ChakraPetchRegularText
                    style={{
                      fontSize: 13,
                      color: colors.main,
                      marginTop: 5,
                    }}
                  >
                    {currentLocations.longitude ?? "Not avaiable"}
                  </ChakraPetchRegularText>
                </View>
                <View>
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                      marginTop: 10,
                    }}
                  >
                    Latitude
                  </ChakraPetchBoldText>
                  <ChakraPetchRegularText
                    style={{
                      fontSize: 13,
                      color: colors.main,
                      marginTop: 5,
                    }}
                  >
                    {currentLocations.latitude ?? "Not avaiable"}
                  </ChakraPetchRegularText>
                </View>
                <View>
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                      marginTop: 10,
                    }}
                  >
                    Latest check
                  </ChakraPetchBoldText>
                  <ChakraPetchRegularText
                    style={{
                      fontSize: 13,
                      color: colors.main,
                      marginTop: 5,
                    }}
                  >
                    {currentLocations.timestamp
                      ? new Date(currentLocations.timestamp).toLocaleTimeString(
                          "en-US"
                        )
                      : "Not avaiable"}
                  </ChakraPetchRegularText>
                </View>
              </View>
              <View style={{ marginLeft: 20 }}>
                <View>
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                    }}
                  >
                    You have moved
                  </ChakraPetchBoldText>
                  <ChakraPetchRegularText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                      marginTop: 10,
                    }}
                  >
                    {firstLocation ? currentMeasure() : "0"} / {CHECK_METTER}{" "}
                    meters
                  </ChakraPetchRegularText>
                </View>
                <View>
                  <ChakraPetchBoldText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                      marginTop: 10,
                    }}
                  >
                    Passed
                  </ChakraPetchBoldText>
                  <ChakraPetchRegularText
                    style={{
                      fontSize: 16,
                      color: colors.main,
                      marginTop: 5,
                    }}
                  >
                    {numberOfCheck} / {CHECK_TIMES} times
                  </ChakraPetchRegularText>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <ChakraPetchBoldText
                style={{
                  fontSize: 16,
                  color: colors.main,
                  marginTop: 10,
                }}
              >
                Checking...
              </ChakraPetchBoldText>
            </View>
          )}
        </Card>
      </View>
    </Container>
  );
}
