import Modal from 'components/Modal/Modal';
import { Icon } from 'components/Icons';

const AddColumnButton = ({ isOpenModal }) => {
    return (
        < button type='button' onClick={isOpenModal}>
        <p>Add another column</p>
        </button>

    )
}
export default AddColumnButton;14