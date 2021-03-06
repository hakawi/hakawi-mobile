import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Container from "../components/Container";
import HealthProgress from "../components/HealthProgress";
import WorkTracking from "../components/WorkTracking";
import BottomButton from "../components/BottomButton";
import PlantBackground from "../components/PlantBackground";
import theme from "../constants/theme";
import { width, height } from "../utils/window";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = width;
const windowHeight = height;

export default function PlayScreen({ navigation }) {
  const initialHour = 0;
  const initialMinute = 0;
  const initialSeconds = 0;
  const initialHealthPercent = 100;
  const initialTheme = theme.day;
  //const maximumHealthSeconds = 14400; // 4 hours
  const maximumHealthSeconds = 100;
  const maxColumns = 11;
  const maxRows = 11;
  const padding = 40;
  const itemWidth = (windowWidth - padding * 2) / maxColumns;
  const itemHeight = (windowHeight - padding * 2) / maxRows;
  const rowWidth = windowWidth - padding * 2;
  const rowHeight = (windowHeight - padding * 2) / maxRows;
  const initialItems = [
    {
      id: 1,
      positionX: 5,
      positionY: 3,
      width: 185,
      height: 204,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/tree.png"),
      },
    },
    {
      id: 2,
      positionX: 7,
      positionY: 6,
      width: 115,
      height: 68,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/house.png"),
      },
    },
    {
      id: 3,
      positionX: 8,
      positionY: 8,
      width: 31,
      height: 36,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/chicken.png"),
      },
    },
    {
      id: 4,
      positionX: 8,
      positionY: 10,
      width: 31,
      height: 36,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/chicken.png"),
      },
    },
    {
      id: 5,
      positionX: 9,
      positionY: 1,
      width: 120,
      height: 108,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/machine.png"),
      },
    },
    {
      id: 6,
      positionX: 10,
      positionY: 9,
      width: 31,
      height: 36,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/chicken.png"),
      },
    },
    {
      id: 7,
      positionX: 8,
      positionY: 9,
      width: 87,
      height: 55,
      type: "image",
      opacity: 1,
      data: {
        source: require("../assets/images/play/cow.png"),
      },
    },
    {
      id: 8,
      positionX: 2,
      positionY: 8,
      opacity: 1,
      width: 270,
      height: 70,
      type: "workTracking",
    },
    {
      id: 9,
      positionX: 0,
      positionY: 2,
      width: 200,
      height: 70,
      opacity: 1,
      type: "healthProgress",
    },
    {
      id: 10,
      positionX: 10,
      positionY: 5,
      width: 270,
      height: 70,
      opacity: 1,
      type: "bottomButton",
    },
  ];

  const [hours, setHours] = useState(initialHour);
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinute);
  const [mainColor, setMainColor] = useState(colors.main);
  const [healthPercent, setHealthPercent] = useState(initialHealthPercent);
  const [matrixOpacity, setMatrixOpacity] = useState(0.5);
  const [themeMode, setThemeMode] = useState(theme.day);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [displayMatrix, setDisplayMatrix] = useState(false);
  const rows = [];
  for (let i = 0; i < maxRows; i++) {
    rows.push(i);
  }
  const columns = [];
  for (let i = 0; i < maxColumns; i++) {
    columns.push(i);
  }

  const storeItems = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@items", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const loadItems = async () => {
    try {
      const _itemsData = await AsyncStorage.getItem("@items");
      const _items = _itemsData != null ? JSON.parse(_itemsData) : initialItems;
      setItems((prevState) => _items);
      setLoading(false);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
      if (minutes === 59) {
        setMinutes(0);
        setHours(hours + 1);
      }
      const _totalSeconds = totalSeconds + 1;
      setTotalSeconds(_totalSeconds);
      const _healthPercent =
        100 - parseInt((_totalSeconds * 100) / maximumHealthSeconds);
      if (_healthPercent <= 0) {
        setHealthPercent(100);
        setTotalSeconds(0);
      } else {
        setHealthPercent(_healthPercent);
      }
      // if (_healthPercent <= 50) {
      //   setThemeMode(theme.night);
      // }
      // setThemeMode(theme.day);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    loadItems();
  }, []);

  const handleMatrixSelect = (positionX, positionY) => {
    if (displayMatrix) {
      const newItems = [...items];
      newItems[selectedIndex].positionX = positionX;
      newItems[selectedIndex].positionY = positionY;
      setItems((prevState) => newItems);
      setDisplayMatrix(false);
      setSelectedItem(null);
      storeItems(newItems);
    }
  };

  const renderRow = (positionX) => {
    return columns.map((positionY, index) => (
      <TouchableOpacity
        key={index}
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          width: itemWidth,
          height: itemHeight,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
        onPress={() => {
          handleMatrixSelect(positionX, positionY);
        }}
      >
        {/* <Text style={{fontSize: 10}}>
            {positionX},{positionY}
          </Text> */}
        <View style={{ width: itemWidth, height: itemHeight }}></View>
      </TouchableOpacity>
    ));
  };

  const renderMatrix = () => {
    return rows.map((item, index) => (
      <View
        key={index}
        style={{
          opacity: matrixOpacity,
          flexDirection: "row",
          width: rowWidth,
          height: rowHeight,
        }}
      >
        {renderRow(index)}
      </View>
    ));
  };

  const getTop = (positionX, positionY, width, height) => {
    return itemHeight * positionX - height / 2 + itemHeight / 2;
  };

  const getLeft = (positionX, positionY, width, height) => {
    return itemWidth * positionY - width / 2 + itemWidth / 2;
  };

  const getComponent = (item, index) => {
    let opacity = selectedItem === null ? 1 : selectedItem === item ? 1 : 0.5;
    let component;
    switch (item.type) {
      case "image":
        component = (
          <Image
            style={{
              width: item.width,
              height: item.height,
              opacity: opacity,
            }}
            source={item.data.source}
          ></Image>
        );
        break;
      case "workTracking":
        component = (
          <WorkTracking
            style={{ opacity: opacity }}
            width={item.width}
            height={item.height}
            themeMode={themeMode}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            mainColor={mainColor}
          />
        );
        break;
      case "bottomButton":
        component = (
          <BottomButton navigation={navigation} themeMode={themeMode} />
        );
        break;
      case "healthProgress":
        component = (
          <HealthProgress
            width={item.width}
            height={item.height}
            navigation={navigation}
            themeMode={themeMode}
            healthPercent={healthPercent}
          />
        );
        break;
      default:
        component = <View></View>;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(selectedItem === null ? item : null);
          setDisplayMatrix(!displayMatrix);
          setSelectedIndex(index);
        }}
      >
        {component}
      </TouchableOpacity>
    );
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <View
        key={item.id}
        style={{
          position: "absolute",
          top: getTop(item.positionX, item.positionY, item.width, item.height),
          left: getLeft(
            item.positionX,
            item.positionY,
            item.width,
            item.height
          ),
          zIndex: 200,
          width: item.width,
          height: item.height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {getComponent(item, index)}
      </View>
    ));
  };

  return (
    <Container>
      <PlantBackground themeMode={themeMode} />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={colors.main} size={"large"} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            {displayMatrix && renderMatrix()}
            {renderItems()}
          </>
        </View>
      )}
    </Container>
  );
}
