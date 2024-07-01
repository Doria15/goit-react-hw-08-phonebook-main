import { Helmet, HelmetProvider } from 'react-helmet-async';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  const displayModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook 📓</h1>
        <button className={css.startBtn} onClick={displayModal}>
          Start Losing Weight
        </button>
        {openModal ? <Modal closeModal={closeModal} /> : ''}
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
