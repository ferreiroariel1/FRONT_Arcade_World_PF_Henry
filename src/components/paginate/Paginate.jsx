import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Paginate({ prevChange, nextChange, pages, pageTotal }) {
  return (
    <Stack spacing={2} marginBottom={2} display='flex' flexDirection='row'>
        <Button variant="text" sx={{color:'#f1f1f1'}} onClick={prevChange}>
        <KeyboardArrowLeftIcon/>
        </Button>
        <Typography variant="inherit">
          Page {pages} of {pageTotal}
        </Typography>
        <Button variant="text" sx={{color:'#f1f1f1'}} onClick={nextChange}>
        <KeyboardArrowRightIcon/>
        </Button>
    </Stack>
  );
}

Paginate.propTypes = {
  prevChange: PropTypes.func.isRequired,
  nextChange: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  pageTotal: PropTypes.number.isRequired,
};

export default Paginate;
