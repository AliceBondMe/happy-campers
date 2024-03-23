import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/selectors';
import { setLocationAction } from '../../redux/advertsSlice';
import { Icon } from 'components/Icon/Icon';
import { IconWrap, Input, InputWrap, Text } from './SearchLocation.styled';

export const SearchLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleLocation = e => {
    dispatch(setLocationAction(e.target.value));
  };

  return (
    <>
      <Text>Location</Text>
      <InputWrap>
        <Input
          type="text"
          value={location}
          onChange={handleLocation}
          placeholder="Ukraine, Kyiv"
        />
        <IconWrap>
          <Icon name={'icon-location'} width={20} height={20} />
        </IconWrap>
      </InputWrap>
    </>
  );
};
