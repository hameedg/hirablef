// redux
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearToastMessages } from '../../store/slices/utils';

const Toast = () => {
  const toastMessages = useSelector((state) => state.utils.toastMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearToastMessages());
    }, 5000);
    return () => clearTimeout(timer);
  }, [toastMessages.length]);

  return (
    <div className="toast">
      {toastMessages.map((m, key) => (
        <div key={key} className={`toast-container ${m.type}`}>
          {m.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
