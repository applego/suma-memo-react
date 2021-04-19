import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import { addMemoAction } from '../actions';

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

const ModalMemoAdd = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [open, setOpen] = useState(true);

  const id = localStorage.getItem('maxmemoid')
    ? (Number(localStorage.getItem('maxmemoid')) + 1).toString()
    : '1';

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [pinned, setPinned] = useState(false);

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
    const now = new Date().toLocaleString();
    const tit = title.trim() || '無題';
    dispatch(addMemoAction(id, tit, text, now, pinned));
    localStorage.setItem('maxmemoid', id);
    handleClose();
  };

  const handleClose = () => {
    history.goBack();
    setOpen(false);
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
        <Button
          autoFocus
          onClick={
            // handleClose();
            handleSubmit
          }
          color='primary'
        >
          Add memo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalMemoAdd;
