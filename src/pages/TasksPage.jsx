import {  useSelector, useDispatch } from "react-redux";
import { selectUser } from "store/auth/selectors";
import { logout } from "store/auth/operations";

const TasksPage = () => {
  const {name} = useSelector(selectUser);
  const dispatch = useDispatch();
    return (
        <>
        <h1>TasksPage</h1>
        <h2>{name}</h2>
        <button onClick={() => dispatch(logout())}>Log out</button>
        </>
    )
}

export default TasksPage;