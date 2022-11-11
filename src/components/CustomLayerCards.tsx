import React from 'react';
import {CustomLayerCard} from "./CustomLayerCard";
import CardMediaImage from "../assets/CardMedia.png";
import {Box} from "@mui/material";

interface Props {
  noOfCards: number;
}

export const CustomLayerCards = ({noOfCards}: Props) => {
  return (
    <Box sx={{
      maxWidth: '270px',
      mx: 'auto',
      padding: '20px',
      border: `1px dashed #7B61FF`,
      borderRadius: '5px',
      display: 'grid',
      justifyContent: 'center',
      gridGap: '2rem',
    }} className="App">
      {Array.from(Array(noOfCards).keys()).map((val) => (
        <CustomLayerCard key={val} cardImg={CardMediaImage} checkboxText={'Flood zone 3'}/>
      ))}

    </Box>
  );
};
