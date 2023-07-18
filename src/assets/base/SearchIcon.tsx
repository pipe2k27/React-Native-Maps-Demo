import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const SearchIcon = () => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <G clipPath="url(#clip0_19_727)">
        <Path
          d="M11.375 5.688a5.674 5.674 0 01-1.094 3.355l3.462 3.464a.876.876 0 01-1.239 1.239L9.043 10.28a5.655 5.655 0 01-3.355 1.094A5.687 5.687 0 010 5.687 5.687 5.687 0 015.688 0a5.687 5.687 0 015.687 5.688zM5.687 9.624a3.938 3.938 0 100-7.875 3.938 3.938 0 000 7.875z"
          fill="#1C3180"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_19_727">
          <Path fill="#fff" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
