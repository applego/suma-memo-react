import React from 'react';
import PropTypes from 'prop-types';
import Memo from './Memo';

const MemoList = ({ memos, onMemoClick }) => (
  <ul>
    {memos.map((memo) => (
      <Memo key={memo.id} {...memo} onClick={() => onMemoClick(memo.id)} />
    ))}
  </ul>
);

MemoList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onMemoClick: PropTypes.func.isRequired,
};

export default MemoList;
