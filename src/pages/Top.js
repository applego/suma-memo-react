import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AddMemo from '../containers/AddMemo';
import VisibleMemoList from '../containers/VisibleMemoList';
import Footer from '../components/Footer';
import MemoList from '../components/MemoList';

const BooksPage = () => {
  return (
    <>
      <main className='c-main'>
        <AddMemo />
        {/* <VisibleMemoList /> */}
        <MemoList />
      </main>
      <Footer />
    </>
  );
};

export default BooksPage;
