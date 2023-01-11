import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { removeCoinFromFavorites } from 'redux/slice/Favorites/FavoritesSlice';

export default function MediaCard({ coin }) {
    const dispatch = useDispatch();
    return (
        <Card sx={{ maxWidth: 330 }}>
            <CardMedia className='imgs'
                sx={{ height: 260 }}
                image={coin.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {coin.id}
                </Typography>
                <Typography>Market Rank : {coin.market_cap_rank}</Typography>
                <Typography>Price Change per hour : {coin.price_change_24h}</Typography>
                <Typography>Total supply : {coin.total_supply}</Typography>
                <Typography>Highest Price : {coin.high_24h}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>
                    dispatch(removeCoinFromFavorites(coin.id)
    )}>Delete</Button>
            </CardActions>
        </Card>
    );
}