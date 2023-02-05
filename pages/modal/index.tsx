import Head from '../../src/components/head';

import Container from '@mui/material/Container';

import SiteTitle from '../../src/components/SiteTitle';
import PageTitle from '../../src/components/PageTitle';
import PageList from '../../src/components/Home/PageList';
import Copyright from '../../src/components/Copyright';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Head title='Modal'/>
      <header>
        <SiteTitle />
        <PageTitle title='Modal' href='/modal' />
      </header>
      <main>
        <PageList />
      </main>
      <footer>
        <Copyright />
      </footer>
    </Container>
  );
}
