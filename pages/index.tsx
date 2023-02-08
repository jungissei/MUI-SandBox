import Head from '@/components/head';

import Container from '@mui/material/Container';

import SiteTitle from '@/components/SiteTitle';
import Copyright from '@/components/Copyright';
import CatList from '@/components/Home/CatList';


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
