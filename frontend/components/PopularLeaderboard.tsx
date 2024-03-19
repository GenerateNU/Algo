import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Leader } from '../types/types';

type PopularProps = {
    leaderboard: Leader[];
}

const PopularLeaderboard: React.FC<PopularProps> = ({leaderboard}: PopularProps) => {
    return (
        <View>
            <Text>
                Something
            </Text>
        </View>
    )
}

export default PopularLeaderboard;