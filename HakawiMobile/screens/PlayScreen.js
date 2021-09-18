import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Container from '../components/Container';
import HealthProgress from '../components/HealthProgress';
import WorkTracking from '../components/WorkTracking';
import BottomButton from '../components/BottomButton';
import PlantBackground from '../components/PlantBackground';
import theme from '../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PlayScreen({navigation}) {
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
  const items = [
    {
      id: 1,
      positionX: 5,
      positionY: 4,
      width: 185,
      height: 204,
      type: 'image',
      data: {
        source: require('../assets/images/play/tree.png'),
      },
    },
    {
      id: 2,
      positionX: 7,
      positionY: 6,
      width: 115,
      height: 68,
      type: 'image',
      data: {
        source: require('../assets/images/play/house.png'),
      },
    },
    {
      id: 3,
      positionX: 8,
      positionY: 8,
      width: 31,
      height: 36,
      type: 'image',
      data: {
        source: require('../assets/images/play/chicken.png'),
      },
    },
    {
      id: 4,
      positionX: 8,
      positionY: 10,
      width: 31,
      height: 36,
      type: 'image',
      data: {
        source: require('../assets/images/play/chicken.png'),
      },
    },
    {
      id: 5,
      positionX: 9,
      positionY: 1,
      width: 120,
      height: 108,
      type: 'image',
      data: {
        source: require('../assets/images/play/machine.png'),
      },
    },
    {
      id: 6,
      positionX: 10,
      positionY: 9,
      width: 31,
      height: 36,
      type: 'image',
      data: {
        source: require('../assets/images/play/chicken.png'),
      },
    },
    {
      id: 7,
      positionX: 8,
      positionY: 9,
      width: 87,
      height: 55,
      type: 'image',
      data: {
        source: require('../assets/images/play/cow.png'),
      },
    },
    {
      id: 8,
      positionX: 2,
      positionY: 24,
      width: 270,
      height: 70,
      type: 'workTracking',
    },
    {
      id: 9,
      positionX: 10,
      positionY: 5,
      width: 270,
      height: 70,
      type: 'bottomButton',
    },
  ];

  const [hours, setHours] = useState(initialHour);
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinute);
  const [mainColor, setMainColor] = useState(colors.main);
  const [healthPercent, setHealthPercent] = useState(initialHealthPercent);
  const [matrixOpacity, setMatrixOpacity] = useState(0);
  const [themeMode, setThemeMode] = useState(theme.day);

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
      // } else {

      // }
      setThemeMode(theme.day);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const renderRow = column => {
    let data = [];
    for (let i = 0; i < maxColumns; i++) {
      data.push(i);
    }
    return data.map((item, index) => (
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          width: itemWidth,
          height: itemHeight,
          borderWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{fontSize: 10}}>
          {column},{item}
        </Text>
      </View>
    ));
  };

  const renderMatrix = () => {
    let data = [];
    for (let i = 0; i < maxRows; i++) {
      data.push(i);
    }
    return data.map((item, index) => (
      <View
        key={index}
        style={{
          opacity: matrixOpacity,
          flexDirection: 'row',
          width: rowWidth,
          height: rowHeight,
        }}>
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

  const getComponent = item => {
    switch (item.type) {
      case 'image':
        return (
          <Image
            style={{width: item.width, height: item.height}}
            source={item.data.source}></Image>
        );
      case 'workTracking':
        return (
          <WorkTracking
            width={item.width}
            height={item.height}
            themeMode={themeMode}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            mainColor={mainColor}
          />
        );
      case 'bottomButton':
        return <BottomButton navigation={navigation} themeMode={themeMode} />;
    }
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <View
        key={item.id}
        style={{
          position: 'absolute',
          top: getTop(item.positionX, item.positionY, item.width, item.height),
          left: getLeft(
            item.positionX,
            item.positionY,
            item.width,
            item.height,
          ),
          zIndex: 200,
          width: item.width,
          height: item.height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback
          onPress={() => setMatrixOpacity(matrixOpacity !== 0 ? 0 : 0.5)}>
          {getComponent(item)}
        </TouchableWithoutFeedback>
      </View>
    ));
    // return (
    //   <View
    //     style={{
    //       position: 'absolute',
    //       top: getTop(3, 8, 100, 150),
    //       left: getLeft(3, 8, 100, 150),
    //       zIndex: 200,
    //       backgroundColor: 'yellow',
    //       width: 100,
    //       height: 150,
    //     }}></View>
    // );
  };

  return (
    <Container>
      <PlantBackground themeMode={themeMode} />
      <View
        style={{
          flex: 1,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          {renderMatrix()}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: rowWidth,
              height: rowHeight * maxRows,
            }}>
            {renderItems()}
          </View>
        </View>
      </View>
    </Container>
  );
}
