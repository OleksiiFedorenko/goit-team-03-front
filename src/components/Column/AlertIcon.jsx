import React from 'react';
import { Icon } from 'components/Icons';
import { icon } from 'styles';

const AlertIcon = () => {
  const iconStyles = {
    svgAlert: {
      ...icon.alert,
      filter: 'drop-shadow(0px 2px 4px currentColor)',
    },
  };
  return <Icon id="alert" sx={iconStyles.svgAlert} />;
};
export default AlertIcon;
