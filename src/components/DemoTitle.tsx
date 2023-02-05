import Typography from '@mui/material/Typography';

type Props = {
  title:string
}

export default function SiteTitle({ title }: Props ) {
  return (
    <Typography
      variant="h3"
      component="h3"
      color="text.primary"
      sx={{
        mb: '30px',
        fontWeight: 'bold',
        fontSize: {
          md: '30px',
          xs: '20px'
        }
      }}
    >
      {title}
    </Typography>
  );
}
