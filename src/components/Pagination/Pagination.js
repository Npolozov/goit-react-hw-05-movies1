import { Pagination } from '@mui/lab';
import { useDispatch } from 'react-redux';

import { changePages } from 'redux/createSlicePaga';

export const CustomPagination = ({ currentPage, total }) => {
  const dispatch = useDispatch();

  console.log(currentPage);
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
        count={total}
        page={Number(currentPage)}
        color="warning"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};
