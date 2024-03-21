import { Icon } from 'components/Icon/Icon';
import { CategoryItem } from './Category.styled';

export const Category = ({ iconName, text }) => {
  return (
    <CategoryItem>
      <Icon name={iconName} width={20} height={20} />
      {text}
    </CategoryItem>
  );
};
