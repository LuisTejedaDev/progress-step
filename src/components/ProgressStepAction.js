import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {selectEnabled} from '../slices/components/progressStepSlice'
import {Blue} from '../colors'

export default ({handleNext = () => {}, finalStep = false}) => {
    const enabled = useSelector(selectEnabled)
    return(
        <View style={styles.container}>
            {
                enabled
                ?
                    <TouchableOpacity style={styles.enabled} onPress={handleNext}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>{!finalStep ? 'Siguiente' : 'Finalizar'}</Text>
                    </TouchableOpacity>
                :
                    <View style={[styles.enabled, {backgroundColor: '#dadada'}]}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>{!finalStep ? 'Siguiente' : 'Finalizar'}</Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        alignSelf: 'stretch',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    enabled: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#dadada',
        borderRadius: 4,
        backgroundColor: Blue
    }
})