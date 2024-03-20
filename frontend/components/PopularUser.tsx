import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Leader } from '../types/types';


type PopularUserProps = {
    leader: Leader
}

const PopularUser : React.FC<PopularUserProps> = ({leader}:  PopularUserProps) => {
    return (
        <View>
            <Text>
                {leader.leader_user.first_name}
            </Text>
        </View>
    )
}

export default PopularUser;