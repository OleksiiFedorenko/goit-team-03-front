import React from 'react';
import { Icon } from 'components/Icons';
import { icon } from 'styles';

const Alerticon = () => {
  const iconStyles = {
    svgAlert: {
      ...icon.svgAlert,
      position: 'absolute', // Position the icons on top of each other
    },
    blurredIcon: {
      ...icon.svgAlert,
      filter: 'url(#blur-filter)',
    },
  };

  return (
    <div style={{ position: 'relative', width: '16px', height: '16px' }}>
      <Icon id="alert" sx={iconStyles.svgAlert} />
      <Icon id="alert" sx={iconStyles.blurredIcon} />
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="blur-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Alerticon;

// import { Icon } from 'components/Icons';
// import { icon } from 'styles';

// const Alerticon = () => {
//   return (
//     <>
//       <Icon id="alert" sx={{ ...icon.svgAlert, filter: 'url(#blur-filter)' }} />
//       <svg style={{ display: 'none' }}>
//         <defs>
//           <filter id="blur-filter">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
//           </filter>
//         </defs>
//       </svg>
//     </>
//   );
// };
// export default Alerticon;
