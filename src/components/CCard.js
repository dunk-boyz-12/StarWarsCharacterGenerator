import React from "react";
//material-ui
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const CCard = ({ name, by, ht, skinColor, eColor, clickHandle }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          STAR WARS CHARACTER GENERATOR
        </Typography>
        <Typography align="center">NAME</Typography>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {name}
        </Typography>
        <Typography align="center">BIRTH YEAR</Typography>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {by}
        </Typography>
        <Typography align="center">HEIGHT</Typography>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {ht}
        </Typography>
        <Typography align="center">SKIN COLOR</Typography>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {skinColor}
        </Typography>
        <Typography align="center">EYE COLOR</Typography>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {eColor}
        </Typography>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            size="small"
            fullWidth={true}
            onClick={clickHandle}
          >
            Generate Character
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default CCard;
