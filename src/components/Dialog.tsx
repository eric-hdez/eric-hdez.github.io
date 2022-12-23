import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export interface DialogProps {
  openDialog: boolean;
  handleOpenDialog: () => void;
  title: string;
  description: string[];
  link: string;
}

export const CustomizedDialog = ({
  openDialog,
  handleOpenDialog,
  title,
  description,
  link,
}: DialogProps) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleOpenDialog}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleOpenDialog}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <List>
            {description.map((line) => (
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  <KeyboardArrowRightSharpIcon
                    fontSize="medium"
                    color="secondary"
                  />
                </ListItemIcon>
                <ListItemText>{line}</ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            endIcon={<KeyboardDoubleArrowRightIcon />}
            href={link}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
