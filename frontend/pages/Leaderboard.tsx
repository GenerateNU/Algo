import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import PopularLeaderboard from '../components/PopularLeaderboard';
import TabHeader from '../components/TabHeader';

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [tab, setTab] = useState("Popular Now");
    const allTabs = ["Popular Now", "All time Bests"];
    return (
        <View style={styles.container}>
            <Text className='pt-7 font-bold text-lg'>Leaderboard</Text>
            <View style={styles.leaderboard} className='rounded-md'>
                <TabHeader activeTab={tab} allTabs={allTabs} setTab={setTab} />
                <PopularLeaderboard leaderboard={leaderboard}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: '#f5f5f5', // You can set your own color scheme
    },
    leaderboard: {
        flex: 1,
        justifyContent: 'flex-start',
        borderColor: '#777777',
        borderWidth: 2,
        marginTop: 12,
        padding: 8,
    }
});  

export default Leaderboard;