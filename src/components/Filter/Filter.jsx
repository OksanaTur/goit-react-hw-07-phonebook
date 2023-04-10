import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { InputFilter, TitleFilter } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };


    return (
        <TitleFilter>
            Find contact by name
            <InputFilter
                type="text"
                value={filter}
                onChange={handleFilter}
            />
        </TitleFilter>
    );
};

export default Filter;