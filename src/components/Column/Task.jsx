import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const TodoCard = ({ name, description, priority, deadline }) => {
  return (
    <Card elevation={2}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Divider variant="middle" />
      </CardContent>
    </Card>
  );
};
export default TodoCard;

/* <h1>{name}</h1>
      <h3>{description}</h3>
      <p>Priority: {priority}</p>
      <p>Deadline: {deadline}</p> */
