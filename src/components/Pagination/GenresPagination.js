import { Pagination } from '@mui/lab';

export const GenresCustomPagination = ({
  genresPage,
  total,
  setGenresPage,
}) => {
  console.log(genresPage);
  const handlePageChange = page => {
    setGenresPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <Pagination
        onChange={e => handlePageChange(e.target.textContent)}
        count={total}
        page={Number(genresPage)}
        color="warning"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};
