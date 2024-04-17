import React from 'react';
import { ScrollView, View } from 'react-native';
import { Leader } from '../types/types';
import PopularUser from './PopularUser';



type PopularProps = {
    leaderboard: Leader[];
}

const PopularLeaderboard: React.FC<PopularProps> = ({leaderboard}: PopularProps) => {

    return (
        <ScrollView>
            {
                leaderboard.map((leader, index) => (
                    <React.Fragment key={index}>
                        <PopularUser leader={leader} />
                        {index < leaderboard.length - 1 && <Separator />}
                    </React.Fragment>
            ))}
        </ScrollView>
    )
}
const Separator = () => <View style={{ height: 15 }} />;

export default PopularLeaderboard;