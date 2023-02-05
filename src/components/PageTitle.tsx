import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

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
      <MuiLink href={href} color="text.primary" underline="none">
        {title}
      </MuiLink>
    </Typography>
  );
}
