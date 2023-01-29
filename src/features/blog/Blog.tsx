import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';
import { useNavigation } from '@react-navigation/native';

const Blog = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getAllBlog = async () => {
    const tokenNew = await AsyncStorage.getItem('storage_Key');

    try {
      const response = await axios.get(
        'http://206.189.37.26:8080/v1/blog/getAllBlog',
        {
          headers: {
            Authorization: `Bearer ${tokenNew}`,
          },
        },
      );
      console.log('response', response.data);
      setData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppIonicons name="chevron-back-outline" size={20} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Blog</Text>
        <Text> </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.containerList} onPress={() => navigation.navigate('BlogDetail' as never, {item: item} as never)}>
              <View style={styles.blockList}>
                <View style={styles.blockLeft}>
                  <Image
                    source={{
                      uri: String(item.thumbnail),
                    }}
                    style={styles.fullwidth}
                  />
                </View>
                <View style={styles.blockRight}>
                  <Text numberOfLines={2}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {color: 'black', fontSize: 14},
  containerList: {
    width: '100%',
    height: 80,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 9
  },
  blockList: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row', borderRadius: 9
  },
  blockLeft: {width: '30%', height: '100%'},
  blockRight: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  fullwidth: {width: '100%', height: '100%', borderTopLeftRadius: 9, borderBottomLeftRadius: 9},
});

export default Blog;
