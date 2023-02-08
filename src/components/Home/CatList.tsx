import Grid from '@mui/material/Grid';

import CatListItem from '@/components/Home/CatListItem';

import CatListData from '../../../public/json/CatList.json';




export default function CatList() {
  return (
    <Grid container spacing={{ xs: 3, md: 3 }}>

      {Array.from(CatListData).map((data, index) => (

        <Grid item xs={12} md={4} key={index}>

          <CatListItem
            text={data.text}
            thumb={data.thumb}
            url={data.url}
          />

        </Grid>

      ))}
    </Grid>
  );
}
