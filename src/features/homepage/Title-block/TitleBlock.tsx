import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import {useNavigation} from '@react-navigation/core';

interface TypeTitleBlock {
  label: string;
  navigateScreen: string;
  passData?: any;
}

const TitleBlock: React.FC<TypeTitleBlock> = ({
  label,
  navigateScreen,
  passData,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.titleBlockContainer}>
      <Text style={styles.titleBlockLeft}>{label}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            navigateScreen as never,
            {passData: passData} as never,
          )
        }>
        <Text style={styles.titleBlockRight}> Xem thêm {'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleBlock;
