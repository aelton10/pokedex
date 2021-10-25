import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Title} from './Styles'

export default function PokemonCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Title>#{props.id}</Title>
      <CardMedia
        component="img"
        height="180"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Title>{props.name}</Title>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.kind}</Button>
      </CardActions>
    </Card>
  );
}
