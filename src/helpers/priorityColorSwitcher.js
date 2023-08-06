const priorityColorSwitcher = priority => {
  let priorityColor = '';

  switch (priority) {
    case 'Low':
      priorityColor = '#8FA1D0';
      break;
    case 'Medium':
      priorityColor = '#E09CB5';
      break;
    case 'High':
      priorityColor = '#BEDBB0';
      break;
    case 'Without':
      priorityColor = '#595959';
      break;
    default:
      priorityColor = '#595959';
  }
  return priorityColor;
};
export default priorityColorSwitcher;
