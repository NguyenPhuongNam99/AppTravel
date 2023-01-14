import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

const SuggestScreenDetail = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Ionicons name='chevron-back-outline' size={20} onPress= {() => navigation.goBack()} />
                <Text style={styles.colorHeader}>Xem gợi ý</Text>
                <Text />
            </View>

            <View style={styles.contentContainer}>

                <FlatList data={item} renderItem={( itemData) => {
                    const itemVert = itemData.item;
                    const regex = /(<([^>]+)>)/gi;
                    const result = itemVert?.item.description?.replace(regex, '');
                    console.log('item vr', itemVert)
                    return (
                        <TouchableOpacity style={styles.containerList} onPress={() => navigation.navigate('RecentScheduleDetailV2' as never, {item:itemData} as never)}>
                            <View style={styles.listLeft}>
                                <Image source={{ uri: itemVert.item.thumbnail[0].url }} style={styles.fullWidth} />
                            </View>
                            <View style={styles.listRight}>
                                <Text style={styles.colorHeader}>{itemVert.item.tour_name}</Text>
                                <Text numberOfLines={2}>{result}</Text>
                                <Text>{itemData.item.nameCIty}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                }} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        width: '100%',
        height: 60, flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    colorHeader: {
        color: 'black',
        fontSize: 14
    },

    contentContainer: {
        width: '100%',
        height: '100%',
        marginTop: 10,
        paddingHorizontal: 10
    },
    containerList: { width: '100%', height: 150, backgroundColor: 'white', flexDirection: 'row', borderRadius: 9, marginTop: 20 },
    listLeft: { width: '30%', height: '100%' },
    listRight: { width: '70%', height: '100%', flexDirection: 'column', justifyContent: 'space-evenly', paddingHorizontal: 15 },
    fullWidth: { width: '100%', height: '100%', borderRadius: 9 }
})

export default SuggestScreenDetail