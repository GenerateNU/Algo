import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type TabParams = {
    activeTab: string,
    allTabs: string[],
    setTab: React.Dispatch<React.SetStateAction<string>>,
}

const TabHeader: React.FC<TabParams> = ({activeTab, allTabs, setTab}: TabParams) => {
    return (
        <View style={styles.container}>
            {
                allTabs.map((item) => {
                    return (
                        <TouchableOpacity key={item} 
                            style={item === activeTab ? styles.active : styles.inactive}
                            onPress={() => setTab(item)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      display: "flex",  
      justifyContent: 'space-between',
      width: "100%",
      flexDirection: "row",
      gap: 12,
      marginBottom: 12,
      marginTop: 12,
    },
    active: {
        color: "#333333",  
        fontSize: 24,
        borderBottomColor: "#333333",
        borderBottomWidth: 2,
        flex: 1,
        alignItems: "center",
        paddingBottom: 8,
    },
    inactive: {
        color: "#777777",  
        fontSize: 24,
        flex: 1,
        alignItems: "center",
        paddingBottom: 8,
    },
});  

export default TabHeader;