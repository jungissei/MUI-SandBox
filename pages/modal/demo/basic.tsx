import Head from '@/components/head';

import Container from '@mui/material/Container';

import SiteTitle from '@/components/SiteTitle';
import PageTitle from '@/components/PageTitle';
import DemoTitle from '@/components/DemoTitle';
import PageList from '@/components/Home/PageList';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Head title='Modal'/>
      <header>
        <SiteTitle />
        <PageTitle title='Modal' href='/modal' />
        <DemoTitle title='Basic' />
      </header>
      <main>
        ここにUIデモが入ります。
      </main>
      <footer>
        <Copyright />
      </footer>
    </Container>
  );
}
