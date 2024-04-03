import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import PopularLeaderboard from '../components/PopularLeaderboard';
import TabHeader from '../components/TabHeader';
import {Leader} from "../types/types";
import {getPopularLeaderboard} from "../services/leaderboard";

const Leaderboard: React.FC = () => {
    //Fetch Leaders
    const [leaderboard, setLeaderboard] = useState<Leader[]>([]);
    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const leaders = await getPopularLeaderboard();
                setLeaderboard(leaders);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        fetchLeaderboard();

        // Cleanup function if needed
       // return () => {
            // Perform any cleanup if necessary
       // };
    }, []);



    //END ATTEMPT
    const [tab, setTab] = useState("Popular Now");
    const allTabs = ["Popular Now", "All time Bests"];
    return (
        <View style={styles.container}>
            <Text className='pt-7 font-bold text-lg'>Leaderboard</Text>
            <View style={styles.leaderboard} className='rounded-md tabBar'>
                <TabHeader activeTab={tab} allTabs={allTabs} setTab={setTab} style={styles.tabBar} />
                <PopularLeaderboard leaderboard={leaderboard}/>
            </View>
            
        </View>
    ) //Can't figure out warnings, or style tab bar. Moving on.
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    leaderboard: {
        flex: 1,
        justifyContent: 'flex-start',
        borderColor: '#999999',
        borderWidth: 2,
        marginTop: 12,
        padding: 0,
    },
    tabBar: {
        marginHorizontal: 80,
        paddingHorizontal: 80,
    }

});  

export default Leaderboard;