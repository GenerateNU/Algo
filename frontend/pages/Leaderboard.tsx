import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import PopularLeaderboard from '../components/PopularLeaderboard';
import PopularTrendingBoard from '../components/PopularTrendingBoard';
import TabHeader from '../components/TabHeader';
import {Leader, Trending} from "../types/types";
import {getPopularLeaderboard, getPopularTrending} from "../services/leaderboard";

const Leaderboard: React.FC = () => {

    const [tab, setTab] = useState("Popular Now");
    const allTabs = [{title: "Popular Now"}, {title: "All time Bests"}];

    //Fetch Leaders
    const [leaderboard, setLeaderboard] = useState<Leader[]>([]);
    
    const [trendingboard, setTrendingBoard] = useState<Trending[]>([]);
    const fetchLeaderboard = async () => {
        try {
            const leaders = await getPopularLeaderboard();
            setLeaderboard(leaders);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    const fetchTrendingBoard = async () => {
        try {
            const trending = await getPopularTrending();
            setTrendingBoard(trending);
        } catch (error) {
            console.error('Error fetching trendingboard')
        }

    };

    useEffect(() => {
        if (tab == "PopularNow") {
            fetchLeaderboard();
            fetchTrendingBoard()
        }
    }, [tab]);

    useEffect(() => {
        fetchLeaderboard();
        fetchTrendingBoard();
    }, []);

    return (
        <View style={styles.container}>
            <View className='flex-row justify-between w-full mb-2'>
                <View>
                    <Text className='pt-7 font-bold text-lg'>Leaderboard</Text>
                    <Text className="text-sm">Check out the top 20 people</Text>
                </View>
                
                <TabHeader activeTab={tab} allTabs={allTabs} setTab={setTab} />
            </View>
            
            <View style={styles.leaderboard} className='rounded-md tabBar'>
                {
                    tab == 'Popular Now' ? 
                        (<PopularLeaderboard leaderboard={leaderboard}/>) :
                        (<PopularTrendingBoard trendingboard={trendingboard}/>)
                }
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
      paddingTop: "15%",
      backgroundColor: '#f5f5f5',
    },
    leaderboard: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-start',
        marginTop: 12,
        padding: 0,
    },
    tabBar: {
        marginHorizontal: 80,
        paddingHorizontal: 80,
    }

});  

export default Leaderboard;