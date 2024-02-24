import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { GoalsPageNavigationProp } from '../types/navigationTypes';
import FinancialGoal from '../components/FinancialGoal';

const GoalsPage: React.FC = () => {
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

    const goals = [
        'Save for retirement',
        'Buy a house',
        'Start a business',
        'Save for vacation',
        'Emergency fund',
        // Add more goals as needed
    ];

    const handleSelectGoal = (goal: string) => {
        if (selectedGoals.includes(goal)) {
            setSelectedGoals(selectedGoals.filter(item => item !== goal));
        } else {
            setSelectedGoals([...selectedGoals, goal]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's get started</Text>
            <Text style={styles.subtitle}>What are your financial goals?</Text>
            <View style={styles.goalsContainer}>
                {goals.map((goal) => (
                    <FinancialGoal
                        key={goal}
                        goal={goal}
                        isSelected={selectedGoals.includes(goal)}
                        onSelect={handleSelectGoal}
                    />
                ))}
            </View>
            {selectedGoals.length > 0 && (
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    goalsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    goal: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        marginBottom: 10,
    },
    goalSelected: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#34A853',
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#34A853',
    },
    goalText: {
        color: '#000',
    },
    goalTextSelected: {
        color: '#fff',
    },
    continueButton: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#34A853',
        alignItems: 'center',
        marginTop: 20,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default GoalsPage;

