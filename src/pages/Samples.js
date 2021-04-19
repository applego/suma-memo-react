import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const data = [
  { id: 1, title: 'sample modal1', text: 'This is a sample modal 1!' },
  { id: 2, title: 'sample modal2', text: 'This is a sample modal 2!' },
  { id: 3, title: 'sample modal3', text: 'This is a sample modal 3!' },
  { id: 4, title: 'sample modal4', text: 'This is a sample modal 4!' },
];

const Samples = () => {
  const location = useLocation();
  const buttonList = data.map((d) => (
    <Button
      variant='outlined'
      color='primary'
      component={Link}
      key={d.id}
      to={{
        pathname: `/samples/${d.id}`,
        state: { background: location },
      }}
    >
      Modal Button {d.id}
    </Button>
  ));
  return (
    <>
      <Typography variant='h4'>Modal Samples</Typography>
      {buttonList}
    </>
  );
};

export default Samples;
