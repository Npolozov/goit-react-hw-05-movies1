import { Pagination } from '@mui/lab';
import { useDispatch } from 'react-redux';

import { changePages } from 'redux/createSlicePaga';

export const CustomPagination = ({ currentPage, numOfPages = 100 }) => {
  console.log(currentPage);
  const dispatch = useDispatch();

  const handlePageChange = page => {
    dispatch(changePages(page));
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
        count={numOfPages}
        defaultPage={Number(currentPage)}
        color="warning"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};
