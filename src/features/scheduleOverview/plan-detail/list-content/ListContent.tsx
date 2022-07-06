import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {styles} from '../styles';
const ListContent = ({data}) => {
  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <View style={styles.blockList}>
                <View style={styles.leftList}>
                  <View style={styles.dottedView}>
                    <Text style={styles.colorWhite}>{index + 1}</Text>
                  </View>
                </View>
                <View style={styles.rightList}>
                  <View style={styles.rightLeftList}>
                    <Image
                      source={item?.image}
                      resizeMode="cover"
                      style={styles.fullWidth}
                    />
                  </View>
                  <View style={styles.rightDoubleList}>
                    <Text style={{fontWeight: 'bold'}}>{item?.namePlace}</Text>
                    <Text>{item.durationGo}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListContent;
