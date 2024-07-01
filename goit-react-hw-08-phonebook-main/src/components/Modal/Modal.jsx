import css from './Modal.module.css';
import { MdClose } from 'react-icons/md';
import { useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getDailyRate,
//   getIsLoading,
//   getNotAllowedProducts,
// } from '../../redux/dailyRate/dailyRateSelectors';

function Modal({ closeModal, openModal }) {
  // const dailyRate = useSelector(getDailyRate);
  // const isLoading = useSelector(getIsLoading);
  // const notAllowedProducts = useSelector(getNotAllowedProducts);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   navigate('/registration');
  //   dispatch(getDailyRate(null));
  // };

  let modalRef = useRef();

  function clickedOutside(e) {
    if (openModal && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickedOutside);
  });

  return (
    <div className={css.modalBackground} ref={modalRef}>
      <div className={css.modalContainer}>
        <button className={css.modalCloseBtn} onClick={closeModal}>
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
            {/* {notAllowedProducts.map((item, index) => (
              <li className={css.modalProhibitedFoodItem} key={index}>
                {index + 1}. {item}
              </li>
            ))} */}
            <li className={css.modalProhibitedFoodItem}>List Number 1</li>
          </ol>
        </div>
        <button className={css.modalStartBtn}>Start Losing Weight</button>
      </div>
    </div>
  );
}
export default Modal;
