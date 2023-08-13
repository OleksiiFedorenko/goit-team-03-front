import React from 'react';
import { DNDColumn } from '.';

class BoardInnerList extends React.PureComponent {
  render() {
    const { column, tasksArr, index } = this.props;
    // console.log('BoardInnerList PROPS: ', this.props);
    // const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    const tasks = column.taskOrder.map(taskId => {
      const task = tasksArr.find(({ _id }) => taskId === _id);
      return task;
    });
    return <DNDColumn column={column} tasks={tasks} index={index} />;
  }
}

export { BoardInnerList };
