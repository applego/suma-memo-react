import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DoneOutline } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Menu, MenuItem } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { deleteMemoAction, togglePinnedAction } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 418,
    position: 'relative',
  },
  // avatar: {
  //   backgroundColor: pinned
  //     ? theme.palette.secondary.main
  //     : theme.palette.primary.main,
  // },
  pinnedIcon: {
    position: 'absolute',
    top: '-12px',
    left: '25px',
  },
}));

const Memo = ({ id, title, text, pinned, created_at, updated_at }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePinn = () => {
    dispatch(togglePinnedAction(id, pinned));
  };

  const handleDelete = () => {
    if (confirm(`「${title}」を削除しますか？`)) {
      dispatch(deleteMemoAction(id));
      const maxid = localStorage.getItem('maxmemoid')
        ? (Number(localStorage.getItem('maxmemoid')) - 1).toString()
        : '0';
      localStorage.setItem('maxmemoid', maxid);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  const handleLink = (path, state) => history.push(path, state);
  const location = useLocation();

  return (
    <Card id={id} className={classes.root}>
      {pinned ? <DoneOutline className={classes.pinnedIcon} /> : null}
      <CardHeader
        avatar={
          <Avatar
            style={{
              backgroundColor: pinned
                ? '#1976D2' // theme.palette.secondary.main
                : '#ee7000', //theme.palette.primary.main,
            }}
            aria-label='title'
            // className={classes.avatar}
            onClick={() => {
              handleLink(`/memo/${id}`, {
                background: location,
                title: title,
                text: text,
                pinned: pinned,
                updated_at: updated_at,
              });
            }}
          >
            {title !== undefined ? title.charAt(0).toUpperCase() : '無'}
          </Avatar>
        }
        action={
          <div>
            <IconButton
              aria-label='settings'
              aria-controls='menu-memo'
              aria-haspopup='true'
              onClick={handleMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='menu-memo'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleLink(`/memo/${id}`, {
                    background: location,
                    title: title,
                    text: text,
                    pinned: pinned,
                    updated_at: updated_at,
                  });
                  handleClose();
                }}
              >
                Edit memo
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handlePinn();
                  handleClose();
                }}
              >
                {pinned ? 'Unpinn' : 'Pinn'} memo
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleDelete();
                  handleClose();
                }}
              >
                Delete memo
              </MenuItem>
            </Menu>
          </div>
        }
        title={
          <div
            onClick={() => {
              handleLink(`/memo/${id}`, {
                background: location,
                title: title,
                text: text,
                pinned: pinned,
                updated_at: updated_at,
              });
            }}
          >
            {title}
          </div>
        }
        subheader={
          <div
            onClick={() => {
              handleLink(`/memo/${id}`, {
                background: location,
                title: title,
                text: text,
                pinned: pinned,
                updated_at: updated_at,
              });
            }}
          >
            {updated_at !== undefined
              ? new Date(updated_at).toLocaleString()
              : ''}
          </div>
        }
      />
      <CardContent
        onClick={() => {
          handleLink(`/memo/${id}`, {
            background: location,
            title: title,
            text: text,
            pinned: pinned,
            updated_at: updated_at,
          });
        }}
      >
        <Typography variant='body2' color='textSecondary' component='p'>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

Memo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

  pinned: PropTypes.bool.isRequired,
  updated_at: PropTypes.string.isRequired,
};

export default Memo;
