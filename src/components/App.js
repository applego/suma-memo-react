import React from 'react';
import Footer from './Footer';
import AddMemo from '../containers/AddMemo';
import VisibleMemoList from '../containers/VisibleMemoList';

const App = () => (
  <div>
    <AddMemo />
    <VisibleMemoList />
    <Footer />
  </div>
);

export default App;
