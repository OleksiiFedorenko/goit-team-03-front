import cards from '../../test-data/cards.json';
import Button from '@mui/material/Button';
import ColumnHeader from './ColumnHeader';
import CardList from './CardList';

const Column = () => {
  return (
    <>
      <ColumnHeader title={'Todo'}></ColumnHeader>
      <CardList cards={cards}></CardList>
      <Button variant="contained">Add another card</Button>
    </>
  );
};

export default Column;
