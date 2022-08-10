import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinearProgress, {LinearProgressProps} from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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

export const Languages = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "white"}}>
        <Typography variant="h5" component="h1" gutterBottom>
            Languages
        </Typography>
        <Typography variant="subtitle1">
            English
        </Typography>
        <LinearProgressWithLabel color="secondary" value={100} />
        <Typography display="inline" variant="subtitle1" align="left">
            Spanish - Native
        </Typography>
        <LinearProgressWithLabel color="secondary" value={100} />
      </ Container>
  );
};