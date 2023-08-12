import { FormControlLabel, useRadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';

const StyledFormControlLabel = styled(props => <FormControlLabel {...props} />)(
  ({ _, checked }) => {
    const userTheme = useSelector(selectTheme);
    const colorChecked = userTheme === 'dark' ? '#FFF' : '#161616';
    return {
      '.MuiFormControlLabel-label': checked && {
        // Change color here
        color: colorChecked,
      },
    };
  }
);

export const CustomControlLabel = props => {
  // MUI UseRadio Group
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
};
