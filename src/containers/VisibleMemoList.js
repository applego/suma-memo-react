import { connect } from 'react-redux';
import MemoList from '../components/MemoList';

const getVisibleMemoList = (memolist, filter) => {
  // debugger;
  switch (filter) {
    case 'SHOW_ALL':
      return memolist;
    case 'SHOW_PINNED':
      return memolist.filter((m) => m.pinned);
    case 'SHOW_NOT_PINNED':
      return memolist.filter((m) => !m.pinned);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  memolist: getVisibleMemoList(state.memolist, state.visibilityFilter),
});

const mapDispatchToProps = {
  // onMemoClick: toggleMemo,
};

const VisibleMemoList = connect(mapStateToProps, mapDispatchToProps)(MemoList);

export default VisibleMemoList;
