import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  useColorScheme,
  ScrollView,
  Linking,
} from 'react-native';
import dateFormat from 'dateformat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

const dimensions = Dimensions.get('screen');

const Details = ({route, navigation}) => {
  const item = route.params.item;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';
  const backColorButton = theme == 'dark' ? '#262626' : '#E6E6E6';

  return (
    <View style={[styles.container, {backgroundColor: backColor}]}>
      <ScrollView>
        <Image style={styles.image} source={{uri: item.urlToImage}} />

        <View style={styles.content}>
          <View>
            {item.source.name && (
              <View style={styles.rowCon}>
                <Ionicons
                  style={[styles.icon, {marginTop: 20}]}
                  name={'book-outline'}
                  size={25}
                  color={color}
                />
                <Text style={[styles.source, {color: color}]}>
                  {'Source: ' + item.source.name}
                </Text>
              </View>
            )}

            {item.author && (
              <View style={styles.rowCon}>
                <Ionicons
                  style={styles.icon}
                  name={'pencil-outline'}
                  size={25}
                  color={color}
                />
                <Text style={[styles.author, {color: color}]}>
                  {'Author: ' + item.author}
                </Text>
              </View>
            )}

            <View style={styles.rowCon}>
              <Ionicons
                style={styles.icon}
                name={'time-outline'}
                size={25}
                color={color}
              />
              <Text style={[styles.publishedAt, {color: color}]}>
                {'Date: ' + dateFormat(item.publishedAt, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </View>

          <Text style={[styles.title, {color: color}]}>{item.title}</Text>

          <Text style={[styles.description, {color: color}]}>
            {item.description}
          </Text>

          <Text style={[styles.content, {color: color}]}>{item.content}</Text>

          <Ripple
            style={[styles.button, {backgroundColor: backColorButton}]}
            rippleColor={color}
            rippleOpacity={0.5}
            rippleCentered={true}
            onPress={() => {
              setTimeout(() => {
                navigation.navigate('Webview', {
                  url: item.url,
                });
              }, 300);
            }}>
            <View style={styles.rowCon}>
              <Ionicons
                style={styles.icon}
                name={'phone-portrait-outline'}
                size={25}
                color={color}
              />
              <Text style={[styles.more, {color: color}]}>
                View more on the app
              </Text>
            </View>

            <Ionicons
              style={styles.icon}
              name={'chevron-forward-outline'}
              size={25}
              color={color}
            />
          </Ripple>

          <Ripple
            style={[
              styles.button,
              {backgroundColor: backColorButton, marginBottom: 20},
            ]}
            rippleColor={color}
            rippleOpacity={0.5}
            rippleCentered={true}
            onPress={() => {
              setTimeout(() => {
                Linking.openURL(item.url);
              }, 300);
            }}>
            <View style={styles.rowCon}>
              <Ionicons
                style={styles.icon}
                name={'globe-outline'}
                size={25}
                color={color}
              />
              <Text style={[styles.more, {color: color}]}>
                View more on the website
              </Text>
            </View>

            <Ionicons
              style={styles.icon}
              name={'chevron-forward-outline'}
              size={25}
              color={color}
            />
          </Ripple>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: dimensions.width,
    height: dimensions.height / 3,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  rowCon: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    margin: 5,
  },
  source: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    margin: 5,
    marginTop: 20,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    margin: 5,
  },
  publishedAt: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 30,
    margin: 5,
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: '200',
    letterSpacing: 0.5,
    lineHeight: 30,
    margin: 5,
  },
  content: {
    fontSize: 18,
    fontWeight: '200',
    letterSpacing: 0.5,
    lineHeight: 30,
    margin: 5,
  },
  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 60,
    borderRadius: 25,
    marginTop: 20,
    padding: 5,
  },
  more: {
    fontSize: 19,
    letterSpacing: 0.1,
  },
});

export default Details;
