// declare module "*.svg" {
//     import React from "react";
//     import { SvgProps } from "react-native-svg";
//     const content: React.FC<SvgProps>;
//     export default content;
//   }
//   declare module 'react';
//   declare module 'react-native';
//   declare module 'react-native-paper';
//   declare module 'react/jsx-runtime';
//   // declare module '@react-navigation/bottom-tabs';
//   // declare module '@rneui/themed';

declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }
