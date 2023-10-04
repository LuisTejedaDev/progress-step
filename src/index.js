import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import {Blue} from "./colors"
import {ProgressStep} from "./components"
import {useSelector} from "react-redux"
import {selectStep} from "./slices/components/progressStepSlice"
import { StepOne, StepThree, StepTwo } from "./signUp"

export default () => {
    const step = useSelector(selectStep)
    const data = [
        {
            id: 1,
            title: 'Payload'
        },
        {
            id: 2,
            title: 'Shopping Adress'
        },
        {
            id: 3,
            title: 'Confirm Order'
        },
    ]

    return(
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: Blue}}/>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Progress Step</Text>
                </View>
                <ProgressStep data={data}/>
                <View style={styles.form}>
                    {
                        step === 1
                        ?
                            <StepOne />
                        :
                            step === 2
                            ?
                                <StepTwo />
                            :   
                                <StepThree />
                    }
                </View>
            </View>
            <SafeAreaView style={{flex: 0, backgroundColor: 'transparent'}}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        height: 55,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Blue
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    progressStep: {
        height: 85,
        alignSelf: 'stretch',
        backgroundColor: 'gray'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})