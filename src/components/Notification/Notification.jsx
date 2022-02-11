import PropTypes from 'prop-types';
import style from './style.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <span className={style.notifi}>{message}</span>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
