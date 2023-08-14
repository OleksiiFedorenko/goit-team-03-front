import Task from 'components/Column/Task';
import { Component } from 'react';

class ColumnInnerList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.tasks?.map((task, index) => {
      // if (!task) return null;
      const { _id, title, description, priority, deadline } = task;
      return (
        <Task
          key={_id}
          taskId={_id}
          name={title}
          description={description}
          priority={priority}
          deadline={deadline}
          index={index}
        />
      );
    });
  }
}

export { ColumnInnerList };
