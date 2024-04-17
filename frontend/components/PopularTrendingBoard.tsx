import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Trending } from '../types/types';
import TrendingUser from './TrendingUser';



type TrendingProps = {
    trendingboard: Trending[];
}

const PopularTrendingBoard: React.FC<TrendingProps> = ({trendingboard}: TrendingProps) => {

    return (
        <ScrollView>
            {
                trendingboard.map((trending, index) => (
                    <React.Fragment key={index}>
                        <TrendingUser trending={trending} />
                        {index < trendingboard.length - 1 && <Separator />}
                    </React.Fragment>
            ))}
        </ScrollView>
    )
}
const Separator = () => <View style={{ height: 15 }} />;

export default PopularTrendingBoard;