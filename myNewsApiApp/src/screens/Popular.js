import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../components/Item';
import {getTopHeadlinesAll} from '../service/Service';

const dimensions = Dimensions.get('screen');

const Popular = () => {
  const [popularData, setPopularData] = useState([]);
  const [error, setError] = useState(false);
  const [isSpinner, setIsSpinner] = useState(true);

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  useEffect(() => {
    getTopHeadlinesAll()
      .then(results => {
          setPopularData(results);

          setIsSpinner(false);
        },
      )
      .catch(err => {
        setError(err);
        setIsSpinner(false);
      });
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: backColor}]}>
      {popularData.length !== 0 &&
        !isSpinner &&
        !error &&
        popularData[0] !== undefined && (
          <View style={styles.contain}>
            <View style={styles.newsContainer}>
              <FlatList
                data={popularData}
                renderItem={({item}) => <Item item={item} />}
              />
            </View>
          </View>
        )}

      {isSpinner && (
        <View style={styles.contain}>
          <ActivityIndicator size="large" color={color} />
        </View>
      )}

      {error && !isSpinner && (
        <View style={styles.contain}>
          <Text style={[styles.errorText, {color: color}]}>Opss!</Text>
          <Text style={[styles.errorText, {color: color}]}>
            Try again Later!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsContainer: {
    width: dimensions.width,
    height: dimensions.height * 0.84,
    flexDirection: 'column',
    padding: 10,
  },
  errorText: {
    fontSize: 16,
    fontWeight: '200',
  },
});

export default Popular;
