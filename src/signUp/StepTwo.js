import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProgressStepAction} from '../components';
import {useDispatch} from 'react-redux';
import {setNextStep} from '../slices/components/progressStepSlice';

export default () => {
    const dispatch = useDispatch()

    return(
        <ScrollView style={{height: 'auto', alignSelf: 'stretch'}}>
            <View style={styles.container}>
                <Text style={{fontSize: 19, fontWeight: 'bold', color: '#dadada'}}>Shopping Address</Text>
            </View>
            <ProgressStepAction handleNext={() => dispatch(setNextStep())}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {height: 400, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1'}
})