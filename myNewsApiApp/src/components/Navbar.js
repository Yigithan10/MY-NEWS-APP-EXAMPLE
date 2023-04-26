import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = props => {
  const {navigation, home} = props;

  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <React.Fragment>
      <View style={[styles.mainNav, {backgroundColor: backColor}]}>
        {!home && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-back-outline'} size={40} color={color} />
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  mainNav: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    marginLeft: 10,
  },
});

export default Navbar;
