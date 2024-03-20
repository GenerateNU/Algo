import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Leader } from '../types/types';
import PopularUser from './PopularUser';



type PopularProps = {
    leaderboard: Leader[];
}

const PopularLeaderboard: React.FC<PopularProps> = ({leaderboard}: PopularProps) => {
    return (
        <View>
            {
                leaderboard.map((leader, index) => (
                    <PopularUser key={index} leader={leader} />
            ))} 
        </View>
    )
}

export default PopularLeaderboard;