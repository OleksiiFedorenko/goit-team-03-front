import { useParams } from "react-router-dom";

const BoardPage = () => {
  const {boardId} = useParams();
    return (
        <div>
            <h1>BoardPage: {boardId}</h1>
        </div>
    )
}

export default BoardPage;