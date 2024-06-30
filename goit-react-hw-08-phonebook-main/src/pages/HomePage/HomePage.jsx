import { Helmet, HelmetProvider } from 'react-helmet-async';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook 📓</h1>
        <button
          className={css.startBtn}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Start Losing Weight
        </button>
      </div>
      <div className={css.modalContainer}>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
