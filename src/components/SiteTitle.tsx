import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import addUrlPrefix from '../addUrlPrefix';

export default function SiteTitle() {
  return (
    <Typography
      variant="h1"
      component="h1"
      sx={{
        pt: '10px',
        pb: '10px',
        mb: '30px',
        fontWeight: 'bold',
        fontSize: {
          md: '40px',
          xs: '30px'
        }
      }}
    >
      <MuiLink href={addUrlPrefix('/')} color="text.primary" underline="none">
        MUI SandBox
      </MuiLink>
    </Typography>
  );
}
