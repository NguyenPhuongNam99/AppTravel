import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';

interface TypeTitleBlock {
  label: string;
}

const TitleBlock: React.FC<TypeTitleBlock> = ({label}) => {
  return (
    <View style={styles.titleBlockContainer}>
      <Text style={styles.titleBlockLeft}>{label}</Text>
      <TouchableOpacity>
        <Text style={styles.titleBlockRight}> Xem thêm {'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleBlock;
