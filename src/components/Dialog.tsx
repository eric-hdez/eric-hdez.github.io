import * as React from 'react';
import {
  List,
  Link,
  ListItem,
  ListItemDecorator,
  Button,
  Modal,
  ModalDialog,
  ModalClose,
  Typography,
  Stack,
  Box,
  Divider,
} from '@mui/joy';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

export interface ModalProps {
  openModal: boolean;
  toggleModal: () => void;
  title: string;
  description: string[];
  link: string;
}

export const CustomModal = ({ openModal, toggleModal, title, description, link }: ModalProps) => {
  return (
    <Modal open={openModal} onClose={toggleModal}>
      <ModalDialog>
        <Stack direction="column" spacing={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography>{title}</Typography>
            <ModalClose />
          </Box>
          <Divider />
          <List sx={{ '--List-decorator-size': '25px' }}>
            {description.map(line => (
              <ListItem sx={{ px: '6px', py: '1px' }}>
                <ListItemDecorator>
                  <KeyboardArrowRightRoundedIcon color="primary" />
                </ListItemDecorator>
                <Typography level="body2">{line}</Typography>
              </ListItem>
            ))}
          </List>
          <Box display="flex" flexGrow={1} alignItems="flex-end">
            <Button
              fullWidth
              component={Link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              underline="none"
            >
              Check it out!
            </Button>
          </Box>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};
