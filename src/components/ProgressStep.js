import {useEffect, useRef} from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native'
import {Blue} from '../colors';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import {useSelector} from 'react-redux';
import {selectStep} from '../slices/components/progressStepSlice';

export default ({data}) => {

    const step = useSelector(selectStep)

    const animatedValues = {
        progressBar: useRef(new Animated.Value(0)).current
    }

    const {progressBar} = animatedValues

    const handleAnimated = () => {
        Animated.timing(progressBar, {
            toValue: step,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    useEffect(() => {
        handleAnimated()
    }, [step])

    const Item = ({id}) => {
        return(
            <View style={styles.item}>
                <View style={[styles.circle, {backgroundColor: step >= id ? '#fff' : '#dadada', borderColor: step >= id ? Blue : '#dadada'}]}>
                    {
                        step > id
                        ?
                            <Material name={'check-bold'} size={16} color={Blue}/>
                        :
                            <Text style={{fontWeight: 'bold', fontSize: 12, color: step >= id ? Blue : '#fff'}}>{id}</Text>
                    }
                </View>
            </View>
        )
    }

    const Legend = ({id, title}) => {
        return(
            <View style={styles.legendBox}>
                <Text style={[styles.legend, {color: id <= step ? Blue : '#dadada'}]}>{title}</Text>
            </View>
        )
    }

    const animatedStyles = {
        width: progressBar.interpolate({
            inputRange: [0, data.length],
            outputRange: ['0%', '100%']
        })
    }

    return(
        <View style={styles.progressStepContainer}>
            <View style={styles.itemContainer}>
                {
                    data.map(x => 
                        <Item key={x.id} total={data.length} {...x}/>    
                    )
                }
            </View>
            <View style={styles.progressContainer}>
                <Animated.View style={[styles.progress, animatedStyles]} />
            </View>
            <View style={styles.legendContainer}>
                {
                    data.map(x => 
                        <Legend key={x.id} total={data.length} {...x}/>    
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    circle: {
        height: 38,
        width: 38,
        borderRadius: 50,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressStepContainer: {
        height: 'auto',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dadada'
    },
    itemContainer: {
        height: 56,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 1
    },
    progressContainer: {
        height: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#dadada',
        width: '100%'
    },
    legendContainer: {
        height: 'auto',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 8
    },
    legendBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        alignSelf: 'stretch'
    },
    legend: {
        fontSize: 13.5,
        textAlign: 'center',
        fontWeight: '500'
    },
    progress: {
        height: '100%',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: Blue,
        left: 0
    }

})