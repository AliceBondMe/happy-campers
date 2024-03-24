import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Img404 } from './Pages.styled';
import img404 from '../assets/images/404.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000);
  }, [navigate]);

  return (
    <div>
      <ErrorMessage>
        You will be automatically redirected to Home page
      </ErrorMessage>
      <Img404 src={img404} alt="Page not found" />
    </div>
  );
};

export default NotFoundPage;
