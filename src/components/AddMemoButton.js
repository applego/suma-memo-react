import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addMemoAction } from '../actions';

const AddMemoButton = () => {
  //todo useDispatch
  // const dispatch = useDispatch();
  // const inputTitle = useRef(null);
  // const inputText = useRef(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let title = inputTitle.current.value;
          if (!title.trim()) {
            title = '無題';
          }
          let text = inputText.current.value;
          const now = new Date().toLocaleString();
          const id = localStorage.getItem('maxmemoid')
            ? (Number(localStorage.getItem('maxmemoid')) + 1).toString()
            : '1';
          dispatch(addMemoAction(id, title, text, now));
          localStorage.setItem('maxmemoid', id);
          inputTitle.current.value = '';
          inputText.current.value = '';
        }}
      >
        <input ref={inputTitle} type='text' />
        <input ref={inputText} type='text' />
        <button type='submit'>Add Memo</button>
      </form>
    </div>
  );
};

export default AddMemo;
