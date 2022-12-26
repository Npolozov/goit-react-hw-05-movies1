import {
  SearchForm,
  SearchFormButton,
  Input,
  InputSection,
} from './SearchMoviesstyled';
import { FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

export const SearchMovies = ({ onSubmit, value }) => {
  const [query, setQuery] = useState('');
  const handelFormChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Введите название фильма');
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <InputSection>
      <SearchForm onSubmit={handelSubmit}>
        <Input
          defaultValue={value}
          type="text"
          placeholder="Search films"
          onChange={handelFormChange}
        />
        <SearchFormButton type="submit">
          <FiSearch width="50px" />
        </SearchFormButton>
      </SearchForm>
      <ToastContainer autoClose={2000} position="top-right" />
    </InputSection>
  );
};
