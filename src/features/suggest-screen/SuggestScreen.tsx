import AsyncStorage from "@react-native-async-storage/async-storage";
import { Base_Url } from "../../constants/const";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from "axios";
import DropDownPicker from 'react-native-dropdown-picker';
import Loading from "../../components/loading/index";
import { useNavigation } from "@react-navigation/native";

const SuggestScreen = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const getAllCity = async () => {
        const tokenNew = await AsyncStorage.getItem('storage_Key');
        try {
            const response = await axios.get(`${Base_Url}/v1/city/getAllCity`, {
                headers: {
                    Authorization: `Bearer ${tokenNew}`,
                },
            });

            const tmp = [];
            response.data.map((item) => {
                tmp.push({
                    label: item.name,
                    value: item.cityId
                })
            })
            setItems(tmp)
        } catch (error) { }
    };

    const suggest = async () => {
        try {
            
            setLoading(true)
            const tokenNew = await AsyncStorage.getItem('storage_Key');
            const obj = {
                price: input,
                place: String(value)
            };

            console.log('obj', obj)
            const response = await axios.post(
                'http://206.189.37.26:8080/v1/tour/getTourForOptionPerson',
                obj, {
                headers: {
                    Authorization: `Bearer ${tokenNew}`,
                },
            },
            );
            console.log('respose', response.data)
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('SuggestScreenDetail' as never, {item: response.data} as never)
            }, 1000)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllCity();
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Ionicons name='chevron-back-outline' size={20} onPress= {() => navigation.goBack()} />
                <Text style={styles.colorHeader}>Xem gợi ý</Text>
                <Text />
            </View>

            {loading && (
                <Loading />
            )}

            <View style={styles.containerContent}>
                <View style={[styles.viewDropdown, Platform.OS === 'ios' && {zIndex: 99}]}>
                    <Text style={styles.titlePlace}>Chọn địa điểm bạn muốn đến </Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdown}
                        placeholderStyle={{ color: '#989898' }}
                        placeholder={'Địa điểm'}
                    />
                </View>
                <View style={styles.viewDropdown}>
                    <Text style={styles.titlePlace}>Nhập tầm giá bạn muốn đi </Text>
                    <TextInput style={[styles.input, Platform.OS === 'ios' && {height: 50}]} placeholder='Giá' placeholderTextColor={'black'} value={input} onChangeText={(text) => setInput(text)} />
                </View>


            </View>
            <View style={styles.containerClick}>
                <TouchableOpacity style={styles.blockClick} onPress={() => suggest()}>
                    <Text style={styles.white}>Xem gợi ý</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%',
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
    containerContent: {
        width: '100%',
        height: '100%',
        marginTop: 20
    },
    viewDropdown: { width: '100%', paddingHorizontal: 12, marginTop: 15, marginBottom: 10 },
    dropdown: {
        // minHeight:20,
        borderColor: '#989898',
        zIndex: 1
    },
    titlePlace: {
        color: 'black',
        marginBottom: 15
    },
    input: {
        borderWidth: 1,
        borderColor: '#989898',
        borderRadius: 9,
        paddingLeft: 9,
        color: 'black',
        backgroundColor: 'white'
    },
    containerClick: { position: 'absolute', bottom: 30, left: 0, right: 0, zIndex: 99, paddingHorizontal: 10, width: '100%', height: 45 },
    blockClick: { width: '100%', height: '100%', borderRadius: 9, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5F24' },
    white: { color: 'white' }

})

export default SuggestScreen;