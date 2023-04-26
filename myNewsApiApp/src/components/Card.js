import React from 'react';
import {StyleSheet, View, Text, Image, useColorScheme} from 'react-native';
import Ripple from 'react-native-material-ripple';

const Card = props => {
  const {item, navigation} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';
  const backColorNews = theme == 'dark' ? '#262626' : '#E6E6E6';

  return (
    <Ripple
      rippleColor={color}
      rippleOpacity={0.5}
      rippleCentered={true}
      onPress={() => {
        navigation.navigate('Details', {
          item: item,
        });
      }}
      style={[styles.container, {backgroundColor: backColorNews}]}>
      <Image style={styles.image} source={{uri: item.urlToImage}} />
      <Text style={[styles.title, {color: color}]}>{item.title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 175,
    minHeight: 300,
    maxWidth: 175,
    maxHeight: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    maxWidth: 200,
    maxHeight: 175,
    margin: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  image: {
    width: 175,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

export default Card;
