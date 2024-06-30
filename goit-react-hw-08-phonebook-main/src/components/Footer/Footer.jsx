import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      &copy; {new Date().getFullYear()} GoIT Student
    </footer>
  );
};
