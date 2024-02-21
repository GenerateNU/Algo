import { memo } from 'react';
import type { FC, ReactNode } from 'react';

// import resets from '../../resets.css';
// import classes from './nav_bar.css';
import { Note11Icon } from './Note11Icon.js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Frame27808Icon } from './Frame27808Icon.tsx';
import { Frame27809Icon } from './Frame27809Icon.js';

interface Props {
  className?: string;
  swap?: {
    note11?: ReactNode;
  };
}

export const NavBar_Property1Default: FC<Props> = memo(
  function NavBar_Property1Default(props = {}) {
    return (
      <View style={classes.root}>
        <View style={classes.frame27808}>
          <Frame27808Icon style={classes.icon} />
        </View>
        {/* <View style={classes.frame27809}>
          {' '}
          <Frame27809Icon style={classes.icon2} /> //className
        </View> */}
        {/* Add similar blocks for Frame27809Icon and Note11Icon */}
      </View>
    );
  },
);

// interface Props {
//   className?: string;
//   classes?: {
//     root?: string;
//   };
//   swap?: {
//     note11?: ReactNode;
//   };
// }
// /* @figmaId 124:1220 */
// export const NavBar_Property1Default: FC<Props> = memo(
//   function NavBar_Property1Default(props = {}) {
//     return (
//       <div
//         style={{ height: 'min-content', padding: '16px 50px' }}
//         //${resets.storybrainResets}
//         className={` ${props.classes?.root || ''} ${props.className || ''} ${
//           classes.root
//         }`}>
//         <div style={classes.frame27808}>
//           {' '}
//           //className
//           <Frame27808Icon style={classes.icon} /> //className
//         </div>
//         {/* <div style={classes.frame27809}>
//           {' '}
//           //className
//           <Frame27809Icon style={classes.icon2} /> //className
//         </div>
//         <div style={classes.note11}>
//           {' '}
//           //className
//           {props.swap?.note11 || <Note11Icon style={classes.icon3} />}{' '}
//           //className
//         </div> */}
//       </div>
//     );
//   },
// );

const classes = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 50, // Change the left position
    bottom: 50,
    width: 393,
    // height: 'min-content', // Wrap string value in quotes
    justifyContent: 'space-between', // Use camelCase for place-content
    alignItems: 'flex-start', // Wrap string value in quotes, use camelCase
    // padding: '16px 50px', // Wrap string value in quotes
    overflow: 'hidden', // Wrap string value in quotes
    boxShadow: 'inset 0px 1px 0px #0000001', // Wrap string value in quotes
  },
  frame27808: {
    width: 24,
    height: 54,
    overflow: 'visible',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  frame27809: {
    width: 24,
    height: 24,
    overflow: 'visible',
    position: 'absolute',
    left: 100, // Change the left position
    top: 100,
  },
  icon2: {
    width: '100%',
    height: '100%',
  },
  note11: {
    width: 24,
    height: 24,
  },
  icon3: {
    width: '100%',
    height: '100%',
  },
});
