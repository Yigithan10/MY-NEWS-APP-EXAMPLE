import React from 'react';
import {Text, StyleSheet, View, useColorScheme} from 'react-native';
import WebView from 'react-native-webview';

const Webview = ({route, navigation}) => {
  const {url} = route.params;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <View style={styles.container}>
      <WebView source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Webview;
