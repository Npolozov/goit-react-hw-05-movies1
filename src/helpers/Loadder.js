import { Circles } from 'react-loader-spinner';

export const Loadder = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0 20px 0',
      }}
    />
  );
};
