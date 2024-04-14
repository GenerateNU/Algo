import React from "react";
import { StyleSheet, Text, View } from "react-native";
import User from "../User";
import { SvgXml } from "react-native-svg";

const NextSvg = `
<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5.99997H16M16 5.99997L9.06667 0.999969M16 5.99997L9.06667 11" stroke="#666666"/>
</svg>
`;

const DiscoverPeople: React.FC = () => {
    return (
        <View className="mt-12">
            <View className="flex-row justify-between">
                <Text style={styles.ppl_txt}>People</Text>
                <View>
                    <SvgXml xml={NextSvg} width="17" height="12" />
                </View>
            </View>
            
            <View style={styles.people}>
              <User name="Michael" postIndex={1} />
              <User name="Isabella" postIndex={2} />
              <User name="Tony Alvarez" postIndex={3} />
            </View>
        </View>
    )
}

export default DiscoverPeople;

const styles = StyleSheet.create({
    ppl_txt: {
        width: 61,
        color: 'rgba(102,102,102,1)',
        // position: 'absolute',
        fontFamily: 'Circular Std',
        fontWeight: '500',
        fontSize: 17,
        opacity: 1,
        textAlign: 'center',
    },
    people: {
        width: 350,
        height: 159,
        // background: 'url("../images/v124_1288.png")',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center center',
        // backgroundSize: 'cover',
        margin: 0,
        opacity: 1,
        // position: 'absolute',
        overflow: 'hidden',
    },
})