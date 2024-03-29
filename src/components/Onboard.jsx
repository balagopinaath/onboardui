import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../assets/colors/colors';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../../assets/images/Onboard1.png'),
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('../../assets/images/Onboard2.png'),
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: require('../../assets/images/Onboard3.png'),
  },
];

const Onboard = props => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#A5C8FF', '#23286B']}
        tart={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </LinearGradient>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        renderDoneButton={renderDoneButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        renderItem={renderItem}
        onDone={handleDone}
      />
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },

  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    margin: 10,
    color: colors.background,
    backgroundColor: 'transparent',
  },
});
