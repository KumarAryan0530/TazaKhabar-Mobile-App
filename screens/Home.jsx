import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import loginBG from '../login_bg.jpg';
import appLogo from '../app_logo.jpg';
import appLogo2 from '../app_logo2.jpg';

import homeicon from '../homeicon.png';
import accounticon from '../account.png';
import trendingicon from '../trending.png';

import SelectDropdown from 'react-native-select-dropdown';

const height = Dimensions.get('screen').height;

const countries = [
  {
    label: 'Global',
    key: 'country',
    value: 'us',
  },
  {
    label: 'Local',
    key: 'country',
    value: 'in',
  },
];
const categories = [
  'General',
  'Business',
  'Entertainment',
  'Health',
  'Science',
  'Sports',
  'Technology',
];

const NewsCard = ({item}) => {
  if (!item.urlToImage || !item.url || !item.title || !item.description)
    return null;
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(item.url)}
      style={styles.card}>
      <Image style={styles.image} source={{uri: item.urlToImage}} />
      <View style={styles.content}>
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={4} style={styles.description}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// NewsCard.map(getFullNewsCard);

function Home({setScreen}) {
  const [data, setData] = useState([]);
  const [scope, setScope] = useState(countries[0]);
  const [category, setCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(true);

  const getNewsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?${scope.key}=${scope.value}&category=${category}&apiKey=58c3085f4e974cca9b95242108e00fbd`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await res.json();
      console.log(data);
      setData(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({scope});

  useEffect(() => {
    getNewsData();
  }, [scope, category]);
  return (
    <KeyboardAvoidingView>
      <View style={styles.HomeBg}>
        <ImageBackground source={loginBG}>
          <View style={styles.filter}>
            <View style={styles.headerContainor}>
              <Image style={styles.appLogo} source={appLogo2} />

              <SelectDropdown
                defaultButtonText="Local"
                buttonStyle={styles.buttonStyle}
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log({selectedItem});
                  setScope(selectedItem);
                }}
                buttonTextAfterSelection={selectedItem => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem.label;
                }}
                rowTextForSelection={item => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item.label;
                }}
              />
              <SelectDropdown
                defaultButtonText="General"
                buttonStyle={styles.buttonStyle1}
                data={categories}
                onSelect={(selectedItem, index) => {
                  setCategory(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {data.map(item => (
                <NewsCard key={item.title} item={item} />
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
        <View style={styles.footerContainor}>
          {loading ? (
            <ActivityIndicator
              style={styles.homeicon}
              size="large"
              color="#000000"
            />
          ) : (
            <TouchableOpacity onPress={getNewsData}>
              <Image style={styles.homeicon} source={homeicon} />
            </TouchableOpacity>
          )}

          <Pressable onPress={() => setScreen('Profile')}>
            <Image style={styles.accounticon} source={accounticon} />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  HomeBg: {
    height: height,
    position: 'relative',
  },
  filter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: height,
    backgroundColor: '#000000ba',
    paddingBottom: 130,
  },

  headerContainor: {
    backgroundColor: 'white',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    position: 'relative',
  },

  buttonStyle: {
    position: 'relative',
    borderRadius: 15,
    width: 90,
    height: 45,
    fontSize: '13px',
  },

  buttonStyle1: {
    borderRadius: 15,
    width: 150,
    height: 45,
    fontSize: '10px',
  },

  // news card styles

  card: {
    flexDirection: 'column',
    bottom: 140,
    height: 350,
    top: 0,
    marginVertical: 3,
    borderRadius: 3,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    paddingBottom: 0,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
  },

  // news card styles end

  footerContainor: {
    backgroundColor: 'white',
    width: '100%',
    bottom: 40,
    height: 90,
    position: 'absolute',
    zIndex: 100,
    flex: 0.1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 0,
  },

  homeicon: {
    width: 40,
    bottom: 20,
    height: 40,
  },

  accounticon: {
    width: 33,
    bottom: 20,
    height: 33,
  },

  next: {
    color: 'black',
  },

  appLogo: {
    height: 70,
    width: 70,
    marginTop: 0,
    marginLeft: 10,
  },
});

export default Home;
