import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Chevron(props: any) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l6 6-6 6"
        stroke="#1C3180"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Chevron;
