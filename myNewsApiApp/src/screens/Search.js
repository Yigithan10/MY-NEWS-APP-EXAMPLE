import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {getSearch} from '../service/Service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../components/Item';

const dimensions = Dimensions.get('screen');

const Search = () => {
  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);
  const [error, setError] = useState(false);

  const searchHandler = () => {
    if (searchQuery.length !== 0) {
      setIsSpinner(true);
      getSearch(searchQuery)
        .then(results => {
          const array = [];
          for (let i = 0; i < 25; i++) {
            array.push(results[i]);
          }
          console.log(array);
          setSearchData(array);
          setIsSpinner(false);
        })
        .catch(err => {
          setError(err);
          setIsSpinner(false);
        });
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: backColor}]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {borderColor: color, color: color}]}
          placeholder={'Search News'}
          placeholderTextColor={color}
          onChangeText={setSearchQuery}
          value={searchQuery}
          returnKeyType={'done'}
          onSubmitEditing={() => {
            searchHandler();
            Keyboard.dismiss();
          }}
        />
        <TouchableOpacity
          disabled={searchQuery.length === 0 ? true : false}
          onPress={() => {
            searchHandler();
            Keyboard.dismiss();
          }}>
          <Ionicons
            style={styles.icon}
            name={'search-outline'}
            size={30}
            color={color}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.newsContainer}>
        {searchData.length !== 0 && !error && !isSpinner && searchData[0] !==undefined && (
          <FlatList
            data={searchData}
            renderItem={({item}) => item && <Item item={item} />}
          />
        )}

        {searchQuery.length === 0 && !error && !isSpinner && (
          <View style={styles.contain}>
            <Text style={[styles.errorText, {color: color}]}>
              Search the news
            </Text>
          </View>
        )}

        {!error && !isSpinner && searchData.length!==0 && searchQuery.length !== 0 && (
          <View style={styles.contain}>
            <Text style={[styles.errorText, {color: color}]}>Not Found!</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 25,
    padding: 8,
    flexBasis: 'auto',
    flexGrow: 1,
  },
  icon: {
    margin: 5,
  },
  newsContainer: {
    height: dimensions.height * 0.78,
    flexDirection: 'column',
    padding: 10,
  },
  errorText: {
    fontSize: 16,
    fontWeight: '200',
  },
});

export default Search;
