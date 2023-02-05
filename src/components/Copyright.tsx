import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      sx={{
        mt: '30px',
        py: '30px',
      }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <MuiLink href="/" color="text.secondary">
        Jung Issei
      </MuiLink>{' '}
      2022 - {new Date().getFullYear()}.
    </Typography>
  );
}
