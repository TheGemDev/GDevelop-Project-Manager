import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb(props) {

  const {  } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" >
        Material-UI
      </Link>
      <Link color="inherit" >
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}