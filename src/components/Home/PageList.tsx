import Grid from '@mui/material/Grid';

import PageListItem from '@/components/Home/PageListItem';

import PageListData from '../../../public/json/Modal.json';


export default function CatList() {
  return (
    <Grid container rowSpacing={{ xs: 3, md: 3 }}>

      {Array.from(PageListData).map((data, index) => (

        <Grid item xs={12} md={12} key={index}>

          <PageListItem
            text={data.text}
            url={data.url}
          />

        </Grid>

      ))}
    </Grid>
  );
}
