import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import addUrlPrefix from '../../addUrlPrefix';

type Props = {
  text:string
  thumb:string
  url:string
}

export default function CatListItem({ text, thumb, url }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 0
      }}
    >
      <CardActionArea href={addUrlPrefix(url)}>
        <CardMedia
          component="img"
          image={addUrlPrefix(thumb)}
        />
        <CardContent sx={{
          background: '#121212'
        }}>

          <Typography
            variant="h2"
            sx={{
              fontSize: "18px"
            }}
          >{text}</Typography>

        </CardContent>
      </CardActionArea>
    </Card>

  );
}
