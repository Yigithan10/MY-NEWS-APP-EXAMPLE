import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  Dimensions,
  Image,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const dimensions = Dimensions.get('screen');

const Item = props => {
  const {item} = props;

  const navigation = useNavigation();

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

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
      style={[styles.container, {backgroundColor: backColor}]}>
      <Image style={styles.image} source={{uri: item.urlToImage}} />
      <Text style={[styles.title, {color: color}]}>{item.title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    marginTop: 15,
  },
  image: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 3.5,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 24,
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default Item;
