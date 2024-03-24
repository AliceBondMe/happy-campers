import { Button } from 'components/Advert/Advert.styled';
import { Text } from 'components/SearchLocation/SearchLocation.styled';
import { useDispatch } from 'react-redux';
import { setFiltersAction } from '../../redux/advertsSlice';
import { Icon } from 'components/Icon/Icon';
import { IconWrap, InputGroup, ResetButton, SubTitle } from './Filters.styled';

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const equipment = formData.getAll('equip');
    const form = formData.get('form');
    const filters = {
      equipment,
      form,
    };
    dispatch(setFiltersAction(filters));
  };

  const resetForm = () => {
    dispatch(setFiltersAction(null));
    const formElement = document.getElementById('filtersForm');
    if (formElement) {
      formElement.reset();
    }
  };

  return (
    <div>
      <Text>Filters</Text>

      <form id="filtersForm" onSubmit={handleSubmit}>
        <SubTitle>Vehicle equipment</SubTitle>

        <InputGroup>
          <label>
            <input type="checkbox" name="equip" value="airConditioner" />
            <IconWrap>
              <Icon name={'icon-ac'} width={32} height={32} />
              <span>AC</span>
            </IconWrap>
          </label>

          <label>
            <input type="checkbox" name="equip" value="transmission" />
            <IconWrap>
              <Icon name={'icon-transmission'} width={32} height={32} />
              <span>Automatic</span>
            </IconWrap>
          </label>

          <label>
            <input type="checkbox" name="equip" value="kitchen" />
            <IconWrap>
              <Icon name={'icon-kitchen'} width={32} height={32} />
              <span>Kitchen</span>
            </IconWrap>
          </label>

          <label>
            <input type="checkbox" name="equip" value="TV" />
            <IconWrap>
              <Icon name={'icon-tv'} width={32} height={32} />
              <span>TV</span>
            </IconWrap>
          </label>

          <label>
            <input type="checkbox" name="equip" value="shower" />
            <IconWrap>
              <Icon name={'icon-shower'} width={32} height={32} />
              <span>Shower/WC</span>
            </IconWrap>
          </label>
        </InputGroup>

        <SubTitle>Vehicle type</SubTitle>
        <InputGroup>
          <label>
            <input type="radio" name="form" value="panelTruck" />
            <IconWrap>
              <Icon name={'icon-van'} width={32} height={32} />
              <span>Van</span>
            </IconWrap>
          </label>

          <label>
            <input type="radio" name="form" value="fullyIntegrated" />
            <IconWrap>
              <Icon name={'icon-integrated'} width={32} height={32} />
              <span>Fully Integrated</span>
            </IconWrap>
          </label>

          <label>
            <input type="radio" name="form" value="alcove" />
            <IconWrap>
              <Icon name={'icon-alcove'} width={32} height={32} />
              <span>Alcove</span>
            </IconWrap>
          </label>
        </InputGroup>

        <Button type="submit">Search</Button>
        <ResetButton type="button" onClick={resetForm}>
          Reset
        </ResetButton>
      </form>
    </div>
  );
};
