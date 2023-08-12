import { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

export const StrictModeDroppable = ({ children, ...props }) => {
  // console.log('StrictModeDroppable PROPS: ', props);
  // console.log('StrictModeDroppable CHILDREN: ', children);
  // console.log(typeof children);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};
