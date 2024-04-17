import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const UpSvg = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 -3.05176e-05C7.21997 -3.05176e-05 5.47991 0.52781 3.99987 1.51674C2.51983 2.50568 1.36628 3.91128 0.685088 5.55582C0.00389951 7.20035 -0.17433 9.00995 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.3639C3.89471 16.6226 5.49836 17.4798 7.24419 17.827C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4801 16.4832 14.0001C17.4722 12.5201 18 10.78 18 8.99997C18 6.61302 17.0518 4.32383 15.364 2.63601C13.6761 0.948181 11.3869 -3.05176e-05 9 -3.05176e-05ZM9 17C7.41775 17 5.87103 16.5308 4.55544 15.6517C3.23985 14.7727 2.21447 13.5232 1.60897 12.0614C1.00347 10.5996 0.84504 8.99109 1.15372 7.43925C1.4624 5.8874 2.22433 4.46193 3.34315 3.34311C4.46197 2.22429 5.88743 1.46237 7.43928 1.15369C8.99113 0.845006 10.5997 1.00343 12.0615 1.60893C13.5233 2.21443 14.7727 3.23981 15.6518 4.55541C16.5308 5.871 17 7.41772 17 8.99997C17 11.1217 16.1571 13.1565 14.6569 14.6568C13.1566 16.1571 11.1217 17 9 17Z" fill="#C2C2C2"/>
<path d="M9 1.00002C7.41775 1.00002 5.87103 1.46921 4.55544 2.34826C3.23985 3.22731 2.21447 4.47674 1.60897 5.93855C1.00347 7.40036 0.84504 9.00889 1.15372 10.5607C1.4624 12.1126 2.22433 13.5381 3.34315 14.6569C4.46197 15.7757 5.88743 16.5376 7.43928 16.8463C8.99113 17.155 10.5997 16.9966 12.0615 16.3911C13.5233 15.7856 14.7727 14.7602 15.6518 13.4446C16.5308 12.129 17 10.5823 17 9.00002C17 6.87829 16.1571 4.84346 14.6569 3.34316C13.1566 1.84287 11.1217 1.00002 9 1.00002ZM13.8 7.60002C13.7069 7.72421 13.5861 7.82502 13.4472 7.89444C13.3084 7.96387 13.1552 8.00002 13 8.00002C12.7836 8.00002 12.5731 7.92984 12.4 7.80002L10 6.00002V14C10 14.2652 9.89464 14.5196 9.70711 14.7071C9.51957 14.8947 9.26522 15 9 15C8.73479 15 8.48043 14.8947 8.29289 14.7071C8.10536 14.5196 8 14.2652 8 14V6.00002L5.6 7.80002C5.49495 7.87881 5.3754 7.93614 5.24818 7.96873C5.12097 8.00132 4.98858 8.00854 4.85858 7.98997C4.59603 7.95246 4.35913 7.81219 4.2 7.60002C4.04087 7.38784 3.97255 7.12115 4.01005 6.8586C4.04756 6.59605 4.18783 6.35915 4.4 6.20002L8.29 3.29002C8.42899 3.14686 8.6059 3.04626 8.8 3.00002H9H9.2C9.39188 3.04062 9.56855 3.13415 9.71 3.27002L13.6 6.20002C13.7051 6.27881 13.7936 6.37752 13.8605 6.49052C13.9274 6.60352 13.9714 6.72859 13.99 6.8586C14.0085 6.9886 14.0013 7.12099 13.9687 7.2482C13.9361 7.37541 13.8788 7.49496 13.8 7.60002Z" fill="#C2C2C2"/>
</svg>
`;

const DownSvg = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C10.78 18 12.5201 17.4721 14.0001 16.4832C15.4802 15.4943 16.6337 14.0887 17.3149 12.4441C17.9961 10.7996 18.1743 8.98999 17.8271 7.24416C17.4798 5.49833 16.6226 3.89468 15.364 2.63601C14.1053 1.37734 12.5016 0.520172 10.7558 0.172905C9.00998 -0.174362 7.20038 0.0038681 5.55585 0.685057C3.91131 1.36625 2.50571 2.5198 1.51677 3.99984C0.527842 5.47988 0 7.21994 0 8.99997C0 11.3869 0.948214 13.6761 2.63604 15.3639C4.32387 17.0518 6.61305 18 9 18ZM9 0.999973C10.5822 0.999973 12.129 1.46917 13.4446 2.34822C14.7602 3.22727 15.7855 4.4767 16.391 5.93851C16.9965 7.40031 17.155 9.00885 16.8463 10.5607C16.5376 12.1125 15.7757 13.538 14.6569 14.6568C13.538 15.7756 12.1126 16.5376 10.5607 16.8463C9.00887 17.1549 7.40034 16.9965 5.93853 16.391C4.47672 15.7855 3.22729 14.7601 2.34824 13.4445C1.46919 12.1289 1 10.5822 1 8.99997C1 6.87824 1.84285 4.84341 3.34315 3.34312C4.84344 1.84283 6.87827 0.999973 9 0.999973Z" fill="#C2C2C2"/>
<path d="M9 16.9999C10.5822 16.9999 12.129 16.5307 13.4446 15.6517C14.7602 14.7726 15.7855 13.5232 16.391 12.0614C16.9965 10.5996 17.155 8.99105 16.8463 7.4392C16.5376 5.88735 15.7757 4.46189 14.6569 3.34307C13.538 2.22425 12.1126 1.46232 10.5607 1.15364C9.00887 0.844959 7.40034 1.00339 5.93853 1.60889C4.47672 2.21439 3.22729 3.23977 2.34824 4.55536C1.46919 5.87095 1 7.41767 1 8.99992C1 11.1217 1.84285 13.1565 3.34314 14.6568C4.84344 16.1571 6.87827 16.9999 9 16.9999ZM4.2 10.3999C4.29315 10.2757 4.41393 10.1749 4.55278 10.1055C4.69164 10.0361 4.84475 9.99992 5 9.99992C5.21637 9.99992 5.4269 10.0701 5.6 10.1999L8 11.9999L8 3.99992C8 3.73471 8.10536 3.48035 8.29289 3.29282C8.48043 3.10528 8.73478 2.99992 9 2.99992C9.26521 2.99992 9.51957 3.10528 9.70711 3.29282C9.89464 3.48035 10 3.73471 10 3.99992L10 11.9999L12.4 10.1999C12.5051 10.1211 12.6246 10.0638 12.7518 10.0312C12.879 9.99862 13.0114 9.9914 13.1414 10.01C13.404 10.0475 13.6409 10.1877 13.8 10.3999C13.9591 10.6121 14.0275 10.8788 13.9899 11.1413C13.9524 11.4039 13.8122 11.6408 13.6 11.7999L9.71 14.7099C9.57101 14.8531 9.3941 14.9537 9.2 14.9999H9L8.8 14.9999C8.60812 14.9593 8.43145 14.8658 8.29 14.7299L4.4 11.7999C4.29494 11.7211 4.20643 11.6224 4.13953 11.5094C4.07262 11.3964 4.02862 11.2713 4.01005 11.1413C3.99148 11.0113 3.99869 10.879 4.03129 10.7517C4.06388 10.6245 4.12121 10.505 4.2 10.3999Z" fill="#C2C2C2"/>
</svg>
`;

const Vote: React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.body}>
            <SvgXml xml={UpSvg} width="18" height="18" />
            <Text style={styles.text}>18</Text>
        </View>

        <SvgXml xml={DownSvg} width="18" height="18" />
        <Text style={styles.text}>10</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%"
    },
    body: {
        flex: 1,
        width: 100,
        flexDirection: "row",
        paddingRight: 10,
    },
    text: {
        marginLeft: 5,
        color: "#C2C2C2",
    }
});

export default Vote;