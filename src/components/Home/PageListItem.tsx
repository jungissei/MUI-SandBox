import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



type Props = {
  text:string
  url:string
}


export default function PageListItem({ text, url }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 0
      }}
    >
      <CardActionArea href={url}>
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
