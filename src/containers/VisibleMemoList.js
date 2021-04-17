import { connect } from 'react-redux';
import { toggleMemo } from '../actions';
import MemoList from '../components/MemoList';

const getVisibleMemos = (memos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return memos;
    case 'SHOW_COMPLETED':
      return memos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return memos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  memos: getVisibleMemos(state.memos, state.visibilityFilter),
});

const mapDispatchToProps = {
  onMemoClick: toggleMemo,
};

const VisibleMemoList = connect(mapStateToProps, mapDispatchToProps)(MemoList);

export default VisibleMemoList;
