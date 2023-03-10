import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import addUrlPrefix from '@/addUrlPrefix';

import parse from 'html-react-parser';

type Props = {
  name:string
  thumb:string
  txt:string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function DogListItem({ name, thumb, txt }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        borderRadius: 0,
      }}
    >
      <CardActionArea
        onClick={handleOpen}
        sx={{
          p: '10px',
        }}
      >
        <CardMedia
          component="img"
          image={addUrlPrefix(thumb)}
        />
        <CardContent>

          <Typography
            variant="h2"
            sx={{
              fontSize: "18px"
            }}
          >{name}</Typography>

        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            image={addUrlPrefix(thumb)}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {parse(txt)}
          </Typography>
        </Box>
      </Modal>
    </Card>

  );
}
