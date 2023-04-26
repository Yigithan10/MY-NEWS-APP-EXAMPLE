import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/Ionicons';

const List = props => {
  const {title, data, iconName, navigation} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  const txtGeneral = 'general';
  const txtBusiness = 'business';
  const txtTechnology = 'technology';
  const txtScience = 'science';
  const txtHealth = 'health';
  const txtSports = 'sports';
  const txtEntertainment = 'entertainment';

  const array = [
    txtGeneral,
    txtBusiness,
    txtTechnology,
    txtScience,
    txtHealth,
    txtSports,
    txtEntertainment,
  ];

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.listUp}>
          <View style={styles.row}>
            <Icon style={styles.icon} name={iconName} size={20} color={color} />
            <Text style={[styles.title, {color: color}]}>{title}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                let Words = title.split(' ');
                navigation.navigate('Category' + Words[0]);
              }}>
              <Text style={[styles.moreText, {color: color}]}>For more</Text>
              <Icon
                style={styles.icon}
                name={'return-up-forward-outline'}
                size={20}
                color={color}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} navigation={navigation} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listUp: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  icon: {
    margin: 5,
  },
  moreText: {
    fontSize: 12,
  },
});

export default List;
