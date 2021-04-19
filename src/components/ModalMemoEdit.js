import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button,
  createStyles,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMemoAction, updateMemoAction } from '../actions';
import { DeleteOutline } from '@material-ui/icons';

const styles = (theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='Close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ModalMemoEdit = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [open, setOpen] = useState(true);

  const { id } = useParams();
  const selector = useSelector((state) => state.memolist);
  const selectedMemo = selector.filter((m) => m.id === id)[0];

  const [title, setTitle] = useState(selectedMemo?.title || '');
  const [text, setText] = useState(selectedMemo?.text || '');
  const [pinned, setPinned] = useState(selectedMemo?.pinned || false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputText = (event) => {
    setText(event.target.value);
  };

  const handlePinChange = (event) => {
    setPinned(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
    const now = new Date().toLocaleString();
    dispatch(updateMemoAction(id, title, text, now, pinned));
  };

  const handleClose = () => {
    history.goBack();
    setOpen(false);
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

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={pinned}
              onChange={handlePinChange}
              aria-label='pinned switch'
            />
          }
          label={pinned ? '  Pinn' : 'Unpinn'}
        />
      </FormGroup>
      <div
        style={{
          minWidth: '400px',
        }}
      ></div>
      <DialogTitle id='customized-dialog-title' onClose={handleClose}>
        <TextField
          fullWidth
          label='title'
          value={title}
          onChange={inputTitle}
        />
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom></Typography>
        <TextField
          fullWidth
          label='content'
          multiline
          rowsMax='16'
          value={text}
          onChange={inputText}
        />
      </DialogContent>
      <DialogActions>
        <IconButton
          aria-label='settings'
          aria-controls='menu-memo'
          aria-haspopup='true'
          onClick={() => {
            handleDelete();
            handleClose();
          }}
        >
          <DeleteOutline />
        </IconButton>
        <Button autoFocus onClick={handleSubmit} color='primary'>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalMemoEdit;
