import icons from '../../assets/icons/icons-sprite.svg';

export const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
