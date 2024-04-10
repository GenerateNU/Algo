import React from 'react';
import { StyleSheet, View } from 'react-native';

type WizardStepProps = {
    step: number
}
const steps = [1, 2, 3, 4, 5]
const WizardStep: React.FC<WizardStepProps> = ({ step }) => {
    return (
        <View style={styles.container}>
            {
                steps.map((num: number) => (
                    <View 
                        key={num} 
                        style={styles.section} className={`rounded ${step >= num ? 'bg-[#02AD98]' : 'bg-[#D6D6D6]'}`}>
                    </View>
                ))
            }
        </View>
    )
}

export default WizardStep;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        gap: 10
    },
    section: {
        height: 10,
        //width: '100%',
        flex: 1
    }
})