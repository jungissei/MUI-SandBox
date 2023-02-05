import Head from 'next/head';

interface Props {
  title: string;
}

export default ({ title }: Props): JSX.Element => {
  let site_title = 'MUI SandBox',
      sep = title === ''?
        '' : ' / ';

  return (
    <Head>
      <title>{`${title}${sep}${site_title}`}</title>
    </Head>
  );
};
