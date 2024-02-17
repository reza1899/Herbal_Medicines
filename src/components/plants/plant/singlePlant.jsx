import "./singlePlant.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const SinglePlant = ({Plant}) => {
    return (
        <>
            <Card sx={{ maxWidth: 450, margin: '20px', padding: '10px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={Plant.avatarUrl}
                        alt="Plant Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Plant.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {Plant.latinName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
export default SinglePlant;