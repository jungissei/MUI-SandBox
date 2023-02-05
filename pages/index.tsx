import Head from '../src/components/head';

import Container from '@mui/material/Container';

import SiteTitle from '../src/components/SiteTitle';
import Copyright from '../src/components/Copyright';
import CatList from '../src/components/Home/CatList';


export default function Home() {
  return (
    <Container maxWidth="md">
      <Head title=""/>
      <header>
        <SiteTitle />
      </header>
      <main>
        <CatList />
      </main>
      <footer>
        <Copyright />
      </footer>
    </Container>
  );
}
