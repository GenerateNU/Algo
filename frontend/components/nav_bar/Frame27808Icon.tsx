import React from 'react';
import { memo, SVGProps } from 'react';
import Icon from './icon1.svg';
import { Text, View } from 'react-native';

const iconXml = Icon ? Icon.toString() : '';
const Frame27808Icon = (props: SVGProps<SVGSVGElement>) => (
  //   <svg
  //     preserveAspectRatio="none"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     {...props}>
  //     <g opacity={0.6}>
  //       <path
  //         d="M11.6075 21.3592L12 24L12.3925 21.3592C13.4557 14.2099 14.2099 13.4555 21.3592 12.3925L24 12L21.3595 11.6075C14.2101 10.5445 13.4557 9.79013 12.3928 2.6408L12 0L11.6075 2.6408C10.5443 9.79013 9.79013 10.5445 2.6408 11.6075L0 12L2.64053 12.3925C9.79013 13.4557 10.5443 14.2099 11.6075 21.3592ZM9.9696 9.9696C11.0085 8.93093 11.548 7.47573 12 5.12133C12.452 7.47573 12.9915 8.93067 14.0304 9.9696C15.0691 11.0083 16.5243 11.548 18.8787 12C16.5243 12.452 15.0693 12.9917 14.0304 14.0304C12.9915 15.0691 12.452 16.5243 12 18.8787C11.548 16.5243 11.0085 15.0693 9.9696 14.0304C8.93093 12.9917 7.47573 12.452 5.12133 12C7.47573 11.548 8.93093 11.0083 9.9696 9.9696Z"
  //         fill="black"
  //       />
  //     </g>
  //   </svg>
  <Icon width={120} height={40} />
);
const Memo = memo(Frame27808Icon);
export { Memo as Frame27808Icon };

// import React from 'react';
// import { memo, SVGProps } from 'react';
// import { Image } from 'react-native';
// import Icon from './icon1.svg';

// const iconXml = Icon ? Icon.toString() : '';

// const Frame27808Icon = (props: SVGProps<SVGSVGElement>) => (
//   <Image
//     style={{ width: 120, height: 40 }} // Adjust the style as needed
//     source={{ uri: `data:image/svg+xml;utf8,${encodeURIComponent(iconXml)}` }}
//   />
// );

// const Memo = memo(Frame27808Icon);
// export { Memo as Frame27808Icon };
