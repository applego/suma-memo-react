import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Memo from './Memo';
import { Grid, makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  memo: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MemoList = (/*{ memolist }*/) => {
  const classes = useStyles();
  const location = useLocation();

  const selector = useSelector((state) => state.memolist);
  const getSortedMemolist = (memolist, isPinned) => {
    return memolist
      ?.filter((memo) => memo.pinned === isPinned)
      .sort((a, b) => {
        if (a.updated_at < b.updated_at) return 1;
        else return -1;
      });
  };

  let sortedMemoList = getSortedMemolist(selector, true);
  sortedMemoList = sortedMemoList.concat(getSortedMemolist(selector, false));
  const memoList = sortedMemoList.map((memo) => (
    <Grid key={memo.id} item xs={12} sm={6} md={4}>
      <Memo
        className={classes.memo}
        component={Link}
        to={{
          pathname: `/memo/${memo.id}`,
          state: { background: location },
        }}
        {...memo}
      />
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {memoList}
      </Grid>
    </div>
  );
};

MemoList.propTypes = {
  memolist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MemoList;
