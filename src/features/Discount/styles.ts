import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {width: '100%', height: '100%'},
    discountContainer: {
        width: '100%',
        height: 215,
        paddingHorizontal: 16,
        marginTop: 16,
      },
      discountBlock: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
      },
      discountTop: {
        width: '100%',
        height: '80%',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
      },
      image: {width: '100%', height: '100%'},
      discountBottom: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 16,
      },
      discountTime: {color: '#575757'},
      discountTitle: {color: 'black'}
})
export default styles;