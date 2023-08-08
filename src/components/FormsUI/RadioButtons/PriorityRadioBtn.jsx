import React from 'react';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import priorityColorSwitcher from 'helpers/priorityColorSwitcher';

const PrIcon = styled('span')(({ btncolor }) => ({
  borderRadius: '50%',
  width: 14,
  height: 14,
  backgroundColor: btncolor || '#BEDBB0',
}));

const PrCheckedIcon = styled(PrIcon)(({ btncolor }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${btncolor || '#BEDBB0'}`,
  position: 'relative',
  '&:before': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: btncolor || '#BEDBB0',
    content: '""',
  },
}));

const PriorityRadioBtn = props => {
  const btncolor = priorityColorSwitcher(props.priority);

  return (
    <Radio
      disableRipple
      icon={<PrIcon btncolor={btncolor} />}
      checkedIcon={<PrCheckedIcon btncolor={btncolor} />}
      {...props}
    />
  );
};
export default PriorityRadioBtn;
