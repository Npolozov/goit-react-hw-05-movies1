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
        setMovies(results);
        setTotal(total_pages / 10);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    }
    getTrendingMovies();
  }, [page]);

  return (
    <div>
      {movies?.length > 0 && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
      {movies?.length > 0 && (
        <CustomPagination currentPage={page} total={total} />
      )}
    </div>
  );
};

export default Home;
