import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const ColumnHeader = ({ title }) => {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <div>
              <IconButton>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          }
          title={title}
        />
      </Card>
    </div>
  );
};
export default ColumnHeader;
