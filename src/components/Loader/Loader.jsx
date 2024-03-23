import { ThreeCircles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeCircles
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        middleCircleColor="var(--button)"
        innerCircleColor="var(--text-main)"
        outerCircleColor="var(--button-hover)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderStyled>
  );
};
