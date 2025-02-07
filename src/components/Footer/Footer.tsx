/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import './Footer.scss';

type Props = {
  isVisible: boolean;
};

export const Footer: React.FC<Props> = ({ isVisible }) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footer__block">
        <div className="footer__logo">
          <Link to="/" className="footer__link">
            <img src="icons/LOGO.svg" alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="footer__block">
        <nav className="footer__nav">
          <Link
            to="https://github.com/GeorgeSavostikov/react_phone-catalog"
            className="footer__link footer__link--bold"
          >
            GitHub
          </Link>

          <Link to="/" className="footer__link footer__link--bold">
            Contacts
          </Link>

          <Link to="/" className="footer__link footer__link--bold">
            Rights
          </Link>
        </nav>
      </div>

      <div className="footer__block">
        <button
          onClick={goToTop}
          className="footer__icon-link"
          id="myBtn"
          style={
            isVisible ? { visibility: 'visible' } : { visibility: 'hidden' }
          }
        >
          Back to top
          <div className="footer__icon">
            <div className="icon icon--arrow-up" />
          </div>
        </button>
      </div>
    </div>
  );
};
