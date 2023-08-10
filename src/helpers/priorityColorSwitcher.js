const priorityColorSwitcher = priority => {
  let priorityColor = '';

  switch (priority) {
    case 'low':
      priorityColor = '#8FA1D0';
      break;
    case 'medium':
      priorityColor = '#E09CB5';
      break;
    case 'high':
      priorityColor = '#BEDBB0';
      break;
    case 'without':
      priorityColor = '#595959';
      break;
    default:
      priorityColor = '#595959';
  }
  return priorityColor;
};
export default priorityColorSwitcher;
