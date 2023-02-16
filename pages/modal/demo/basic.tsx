import Head from '@/components/head';

import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '~/themeDemo';
import SiteTitle from '@/components/SiteTitle';
import PageTitle from '@/components/PageTitle';
import DemoTitle from '@/components/DemoTitle';
import Copyright from '@/components/Copyright';
import ModalList from '@/components/Modal/ModalList';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="md">
      <Head title='Modal'/>
      <header>
        <SiteTitle />

        <div>
          <PageTitle title='Modal' href='/modal' />
          <DemoTitle title='Basic' />
        </div>
      </header>
      <main>
        <ModalList />
      </main>
      <footer>
        <Copyright />
      </footer>
    </Container>
    </ThemeProvider>
  );
}
