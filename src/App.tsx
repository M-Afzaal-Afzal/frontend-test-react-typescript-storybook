import React from "react"
import {Box} from "@mui/material";

import {CustomLayerCards} from "./components/CustomLayerCards";

function App() {
  return (
    <Box sx={{
      padding: '2rem',
    }}>
      <CustomLayerCards noOfCards={3}/>
    </Box>
  )
}

export default App
