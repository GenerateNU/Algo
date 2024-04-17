import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

type Item = {
    title: string
}
type TabParams = {
    activeTab: string,
    allTabs: Item[],
    setTab: React.Dispatch<React.SetStateAction<string>>,
}

const TabHeader: React.FC<TabParams> = ({activeTab, allTabs, setTab}: TabParams) => {
    console.log(allTabs, activeTab)
    return (
        <View style={styles.container} className='pt-7'>
            
            <SelectDropdown
                data={allTabs}
                dropdownStyle={styles.dropdown}
                dropdownOverlayColor={"rgb(255, 255, 255, 0.4)"}
                onSelect={(selectedItem: Item, index: number) => {
                    setTab(selectedItem.title)
                }}
                defaultValue={{title: activeTab}}
                renderButton={(selectedItem: Item, isOpened: boolean) => {
                    return (
                        <View style={isOpened ? styles.openButton : styles.button}>
                            {
                                selectedItem &&
                                <Text style={styles.buttonText}>{selectedItem.title}</Text>

                            }
                            <Text style={styles.buttonText}>⌄</Text>
                        </View>
                    )
                }}
                renderItem={(item: Item, index: number, isSelected: boolean) => {
                    return (
                            <View key={index}>
                                <Text style={isSelected? styles.buttonSelected : styles.sub_text}>{item.title}</Text>
                            </View>
                        
                    )
                }}
            />
            {/* {
                allTabs.map((item) => {
                    return (
                        <TouchableOpacity key={item.title} 
                            style={item.title === activeTab ? styles.active : styles.inactive}
                            onPress={() => setTab(item.)}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
            } */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: 140,
    },
    button: {
        backgroundColor: "#02AD98",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: "center",
        flexDirection: "row",
    },
    openButton: {
        backgroundColor: "#02AD98",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonText: {
        color: "#FFFFFF",
    },
    buttonSelected: {
        color: "#FFFFFF",
        marginVertical: 5,
        textAlign: "center"
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
    sub_text: {
        color: "#D9D9D9",
        marginVertical: 5,
        textAlign: "center"
    },
    dropdown: {
        padding: 12,
        backgroundColor: "#02AD98",
        flexDirection: "column",
        gap: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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