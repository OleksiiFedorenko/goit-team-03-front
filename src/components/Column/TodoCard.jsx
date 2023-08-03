import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const TodoCard = ({ name, description, priority, deadline }) => {
  return (
    <div>
      <Card>
        <CardHeader />
      </Card>
      {/* <h1>{name}</h1>
      <h3>{description}</h3>
      <p>Priority: {priority}</p>
      <p>Deadline: {deadline}</p> */}
    </div>
  );
};
export default TodoCard;
