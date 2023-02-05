import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import addUrlPrefix from '../addUrlPrefix';

type Props = {
  title:string
  href:string
}


export default function SiteTitle({ title, href }: Props ) {
  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{
        mb: '30px',
        fontWeight: 'bold',
        fontSize: {
          md: '35px',
          xs: '25px'
        }
      }}
    >
      <MuiLink href={addUrlPrefix(href)} color="text.primary" underline="none">
        {title}
      </MuiLink>
    </Typography>
  );
}
