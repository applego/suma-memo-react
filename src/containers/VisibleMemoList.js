import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMemoAction, toggleMemo } from '../actions';
import MemoList from '../components/MemoList';

const getVisibleMemoList = (memolist, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return memolist;
    case 'SHOW_COMPLETED':
      return memolist.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return memolist.filter((t) => !t.completed);
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

// // hooks で書き換え
// const useFetchMemos = () => {
//   const dispatch = useDispatch();
//   const memmos = useSelector((state) => state.memos);

//   useEffect(() => {
//     dispatch(fetchMemoAction());
//   });

//   return memmos;
// };
