// import React from 'react';

// const CircularProgressBar = () => (
//   <div
//     className="progress h-progress-height w-progress-width ml-auto mr-auto mb-auto"
//     style={{ marginTop: '9.5%' }}
//   >
//     <svg
//       className="w-full align-middle"
//       viewBox="0 0 100 100"
//       data-test-id="CircularProgressbar"
//     >
//       <path
//         d="
//       M 50,50
//       m 0,-47.5
//       a 47.5,47.5 0 1 1 0,95
//       a 47.5,47.5 0 1 1 0,-95
//     "
//         style={{
//           strokeWidth: '5px',
//           fillOpacity: '0',
//           stroke: '#d6d6d6',
//           strokeLinecap: 'round',
//           strokeDasharray: '298.451px, 298.451px',
//           strokeDashoffset: '0px',
//         }}
//       />
//       <path
//         d="
//       M 50,50
//       m 0,-47.5
//       a 47.5,47.5 0 1 1 0,95
//       a 47.5,47.5 0 1 1 0,-95
//     "
//         style={{
//           stroke: 'rgb(1, 163, 164)',
//           strokeWidth: '5px',
//           strokeLinecap: 'round',
//           strokeDasharray: '298.451px, 298.451px',
//           strokeDashoffset: '77.5973px',
//           fillOpacity: '0',
//           transition: 'stroke-dashoffset 0.5s ease 0s',
//         }}
//       />
//       <text
//         x="50"
//         y="50"
//         style={{
//           fill: 'rgb(1, 163, 164)',
//           fontSize: '20px',
//           dominantBaseline: 'middle',
//           textAnchor: 'middle',
//         }}
//       >
//         74%
//       </text>
//     </svg>
//   </div>
// );

// export default CircularProgressBar;

import * as React from 'react';
import { Component, CSSProperties } from 'react';

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) =>
  Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

class CircularProgressBar extends Component {
  render() {
    const {
      progress,
      size,
      bgColor,
      progressColor,
      lineWidth,
      animate,
      animationDuration,
      roundedStroke,
      responsive,
      onAnimationEnd,
      children,
    } = this.props;
    const strokeDashoffset = getOffset(progress);
    const transition = animate
      ? `stroke-dashoffset ${animationDuration} ease-out`
      : undefined;
    const strokeLinecap = roundedStroke ? 'round' : 'butt';
    const svgSize = responsive ? '100%' : size;

    return (
      <div
        className="relative flex items-center justify-content-center"
        style={{
          height: '92%',
          width: '92%',
        }}
      >
        <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
          <circle
            stroke={bgColor}
            cx="175"
            cy="175"
            r="175"
            strokeWidth={lineWidth}
            fill="none"
          />
          <circle
            stroke={progressColor}
            transform="rotate(-90 175 175)"
            cx="175"
            cy="175"
            r="175"
            strokeDasharray="1100"
            strokeWidth={lineWidth}
            strokeDashoffset="1100"
            strokeLinecap={strokeLinecap}
            fill="none"
            style={{ strokeDashoffset, transition }}
            onTransitionEnd={onAnimationEnd}
          />
        </svg>
        <div
          className="absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2"
          style={{
            height: '75%',
            width: '75%',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

CircularProgressBar.defaultProps = {
  progress: 0,
  animate: true,
  animationDuration: '1s',
  showPercentage: true,
  showPercentageSymbol: true,
  progressColor: '#01A2A4',
  // bgColor: '#ecedf0',
  bgColor: '#fff',
  textColor: '#6b778c',
  size: '100%',
  lineWidth: 10,
  roundedStroke: true,
  percentSpacing: 10,
};

export default CircularProgressBar;
