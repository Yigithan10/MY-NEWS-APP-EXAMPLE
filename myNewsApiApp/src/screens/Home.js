import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  useColorScheme,
  Image,
  Pressable,
  BackHandler,
} from 'react-native';
import {getCategory, getTopHeadlines} from '../service/Service';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {ScrollView} from 'react-native';
import List from '../components/List';

const dimensions = Dimensions.get('screen');

const Home = props => {
  const {navigation} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  const [topHeadlinesData, setTopHeadlinesData] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);
  const [scienceData, setScienceData] = useState([]);
  const [healthData, setHealthData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [error, setError] = useState(false);
  const [isSpinner, setIsSpinner] = useState(true);

  const txtGeneral = 'general';
  const txtBusiness = 'business';
  const txtTechnology = 'technology';
  const txtScience = 'science';
  const txtHealth = 'health';
  const txtSports = 'sports';
  const txtEntertainment = 'entertainment';

  const getData = () => {
    return Promise.all([
      getTopHeadlines(),
      getCategory(txtGeneral),
      getCategory(txtBusiness),
      getCategory(txtTechnology),
      getCategory(txtScience),
      getCategory(txtHealth),
      getCategory(txtSports),
      getCategory(txtEntertainment),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          topHeadlines,
          general,
          business,
          technology,
          science,
          health,
          sports,
          entertainment,
        ]) => {
          setTopHeadlinesData(topHeadlines);
          setGeneralData(general);
          setBusinessData(business);
          setTechnologyData(technology);
          setScienceData(science);
          setHealthData(health);
          setSportsData(sports);
          setEntertainmentData(entertainment);

          setIsSpinner(false);
        },
      )
      .catch(err => {
        setError(err);
        setIsSpinner(false);
      });
  }, []);

  const Preview = ({item, imageKey, onPress}) => {
    return (
      <Pressable
        style={styles.videoContainer}
        onPress={() => {
          onPress(item);
        }}>
        <View style={[styles.imageContainer, styles.shadow]}>
          <Image style={styles.image} source={{uri: item[imageKey]}} />
        </View>
        <Text style={[styles.title, {color: color}]}>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <React.Fragment>
      <View style={[styles.container, {backgroundColor: backColor}]}>
        {!isSpinner && !error && (
          <ScrollView>
            {/* Top Headlines */}
            {topHeadlinesData && (
              <View>
                <FlatListSlider
                  data={topHeadlinesData}
                  imageKey={'urlToImage'}
                  width={dimensions.width}
                  timer={5000}
                  component={<Preview />}
                  onPress={item => navigation.navigate('Details', {item: item})}
                  // indicatorActiveWidth={40}
                  indicatorContainerStyle={{position: 'absolute', bottom: 15}}
                  indicatorActiveColor={'red'}
                  indicatorInActiveColor={color}
                  animation
                />
              </View>
            )}

            {/* General */}
            {generalData && (
              <View>
                <List
                  title={'General News'}
                  data={generalData}
                  iconName={'grid-outline'}
                  navigation={navigation}
                />
              </View>
            )}

            {/* Business */}
            {businessData && (
              <View>
                <List
                  title={'Business News'}
                  data={businessData}
                  iconName={'business-outline'}
                  navigation={navigation}
                />
              </View>
            )}

            {/* Technology */}
            {technologyData && (
              <View>
                <List
                  title={'Technology News'}
                  data={technologyData}
                  iconName={'phone-portrait-outline'}
                  navigation={navigation}
                />
              </View>
            )}

            {/* Science */}
            {scienceData && (
              <View>
                <List
                  title={'Science News'}
                  data={scienceData}
                  iconName={'planet-outline'}
                  navigation={navigation}
                />
              </View>
            )}

            {/* Health */}
            {healthData && (
              <View>
                <List
                  title={'Health News'}
                  data={healthData}
                  iconName={'medkit-outline'}
                  navigation={navigation}
                />
              </View>
            )}

            {/* Sports */}
            {sportsData && (
              <View>
                <List
                  title={'Sports News'}
                  data={sportsData}
                  iconName={'football-outline'}
                  navigation={navigation}
                />
              </View>
            )}

            {/* Entertainment */}
            {entertainmentData && (
              <View>
                <List
                  title={'Entertainment News'}
                  data={entertainmentData}
                  iconName={'people-outline'}
                  navigation={navigation}
                />
              </View>
            )}
          </ScrollView>
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
    </React.Fragment>
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
  errorText: {
    fontSize: 16,
    fontWeight: '200',
  },
  videoContainer: {
    width: dimensions.width,
    height: dimensions.height / 2,
    minHeight: dimensions.height / 2,
    maxHeight: dimensions.height / 2,
    paddingVertical: 28,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: dimensions.width,
    height: dimensions.height / 3,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    letterSpacing: 0.4,
    lineHeight: 24,
    marginTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Home;
