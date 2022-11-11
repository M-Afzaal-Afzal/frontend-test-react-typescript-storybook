import React from 'react';
import {Box, Card, CardMedia, Checkbox} from "@mui/material";
import CardMediaImg from '../assets/CardMedia.png';

interface Props {
  cardImg?: string;
  checkboxText?: string;
}

export const CustomLayerCard = ({cardImg, checkboxText}: Props) => {
  return (
    <Card elevation={0} sx={{maxWidth: '230px', border: '1px solid #EFEFEF', borderRadius: '10px'}}>
      <CardMedia
        component="img"
        height="100"
        image={cardImg ?? CardMediaImg}
        alt="green iguana"
      />
      <Box sx={{
        padding: "8px",
        display: 'flex',
        alignItems: 'center',
      }}>
        <Checkbox color={'secondary'} />
        {checkboxText ?? 'checkbox'}
      </Box>
    </Card>
  );
};
