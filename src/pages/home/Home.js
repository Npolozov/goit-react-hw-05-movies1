import { getMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/filmList/FilmList';
import { ToastContainer, toast } from 'react-toastify';
import { CustomPagination } from 'components/Pagination/Pagination';
import { pages } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState('');
  const page = useSelector(pages);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const { results, total_pages } = await getMovies(page);
        console.log(results);
        setMovies(results);
        setTotal(total_pages / 10);
      } catch (error) {
        console.log(error.message);
        toast.error('Something went wrong');
      }
    }
    getTrendingMovies();
  }, [page]);

  // const handleClick = () => {
  //   let formData = new FormData();
  //   console.log(formData.append('Товарі', JSON.stringify(movies)));
  // };

  return (
    <div>
      {/* <button onClick={handleClick}>clicl</button> */}
      {movies?.length > 0 && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
      {movies?.length > 0 && (
        <CustomPagination currentPage={page} total={total} />
      )}
    </div>
  );
};

export default Home;
