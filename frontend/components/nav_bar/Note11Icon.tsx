import React from 'react';
import { memo, SVGProps } from 'react';

const Note11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <g opacity={0.6} clipPath="url(#clip0_124_1590)">
      <circle cx={12} cy={12} r={12} fill="#D9D9D9" />
    </g>
    <defs>
      <clipPath id="clip0_124_1590">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Note11Icon);
export { Memo as Note11Icon };
