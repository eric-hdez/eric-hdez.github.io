import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinearProgress, {LinearProgressProps} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const Skills = () => {
    return (
      <Container maxWidth="lg" sx={{p: 4, backgroundColor: "#EEEEEE"}}>
        <Typography variant="h5" component="h1" gutterBottom sx={{pb: 2}}>
            Skills
        </Typography>
        <Typography variant="subtitle1">
            C
        </Typography>
        <LinearProgressWithLabel color="secondary" value={80} />
        <Typography display="inline" variant="subtitle1" align="left">
            Python
        </Typography>
        <LinearProgressWithLabel color="secondary" value={80} />
        <Typography display="inline" variant="subtitle1" align="left">
            C++
        </Typography>
        <LinearProgressWithLabel color="secondary" value={65} />
        <Typography display="inline" variant="subtitle1" align="left">
            Git
        </Typography>
        <LinearProgressWithLabel color="secondary" value={60} />
        <Typography display="inline" variant="subtitle1" align="left">
            OpenAPI
        </Typography>
        <LinearProgressWithLabel color="secondary" value={35} />
        <Typography display="inline" variant="subtitle1" align="left">
            Express.js
        </Typography>
        <LinearProgressWithLabel color="secondary" value={35} />
        <Typography display="inline" variant="subtitle1" align="left">
            JS/TS/React
        </Typography>
        <LinearProgressWithLabel color="secondary" value={35} />
        <Typography display="inline" variant="subtitle1" align="left">
            PostgreSQL
        </Typography>
        <LinearProgressWithLabel color="secondary" value={30} />
      </ Container>
    )
}
