import Grid from '@mui/material/Grid';

import ModalListItem from '~/components/Modal/ModalListItem';

import DogListData from '../../../public/json/DogList.json';




export default function DogList() {

  return (
    <Grid container spacing={{ xs: 3, md: 3 }}>

      {Array.from(DogListData).map((data, index) => (

        <Grid item xs={12} md={4} key={index}>

          <ModalListItem
            name={data.name}
            thumb={data.thumb}
          />

        </Grid>

      ))}
    </Grid>
  );
}
