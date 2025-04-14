import React from 'react';
import styles from '@/styles/Notification.module.css';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ type, message, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Ensure message is a string
  const displayMessage = typeof message === 'string' ? message : 'An error occurred';

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p>{displayMessage}</p>
      <button onClick={onClose} className={styles.closeButton}>
        ×
      </button>
    </div>
  );
};

export default Notification; 