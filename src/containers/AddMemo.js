import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModalMemoAdd from '../components/ModalMemoAdd';

const AddMemo = () => {
  const location = useLocation();

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        component={Link}
        to={{
          pathname: '/memo/new',
          state: { background: location },
        }}
      >
        Add Memo
      </Button>
      <div className='module-spacer--small' />
    </>
    // <div>
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       let title = inputTitle.current.value;
    //       if (!title.trim()) {
    //         title = '無題';
    //       }
    //       let text = inputText.current.value;
    //       const now = new Date().toLocaleString();
    //       const id = localStorage.getItem('maxmemoid')
    //         ? (Number(localStorage.getItem('maxmemoid')) + 1).toString()
    //         : '1';
    //       dispatch(addMemoAction(id, title, text, now));
    //       localStorage.setItem('maxmemoid', id);
    //       inputTitle.current.value = '';
    //       inputText.current.value = '';
    //     }}
    //   >
    //     <input ref={inputTitle} type='text' />
    //     <input ref={inputText} type='text' />
    //     <button type='submit'>Add Memo</button>
    //   </form>
    // </div>
  );
};

export default AddMemo;
