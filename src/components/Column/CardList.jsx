import TodoCard from './TodoCard';
const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map(card => {
        const { name, description, priority, deadline } = card;
        return (
          <TodoCard
            key={card.id}
            name={name}
            description={description}
            priority={priority}
            deadline={deadline}
          />
        );
      })}
    </div>
  );
};
export default CardList;
