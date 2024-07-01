import css from './Modal.module.css';
import { MdClose } from 'react-icons/md';
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ modalVisibility }) => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   navigate('/registration');
  //   dispatch(getDailyRate(null));
  // };

  return (
    <div className={css.modalBackground}>
      <div className={css.modalContainer}>
        <button
          className={css.modalCloseBtn}
          onclick={() => {
            modalVisibility(false);
          }}
        >
          <MdClose />
        </button>
        <h1 className={css.modalHeader}>
          Your recommended daily calorie intake is
        </h1>
        <p className={css.modalTotalCalories}>
          X <span className={css.modalCaloriesLabel}>KCal</span>
        </p>
        <div className={css.modalProhibitedFoodContainer}>
          <h2 className={css.modalProhibitedFoodTitle}>
            Foods you should not eat
          </h2>
          <ol className={css.modalProhibitedFoodList}>
            <li className={css.modalProhibitedFoodItem}>List Number 1</li>
          </ol>
        </div>
        <button className={css.modalStartBtn}>Start Losing Weight</button>
      </div>
    </div>
  );
};
export default Modal;
