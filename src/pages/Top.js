import React from 'react';
import VisibleMemoList from '../containers/VisibleMemoList';
import AddMemoButton from '../components/AddMemoButton';
import Footer from '../components/Footer';
import MemoList from '../components/MemoList';

const TopPage = () => {
  return (
    <>
      <main className='c-main'>
        <AddMemoButton />
        <VisibleMemoList />
        <MemoList />
      </main>
      <Footer />
    </>
  );
};

export default TopPage;
