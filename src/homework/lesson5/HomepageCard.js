import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import React from "react";

const HomepageCard = ({title, description}) => {
    return(
        <Card elevation={4}>
            <CardHeader title={
                <Typography
                    component="div"
                    variant="h5"
                    color="text.primary"
                    align="center"
                >{title}</Typography>
            }/>
            <CardContent>
                <Typography
                    component="div"
                    variant="body1"
                    color="text.secondary"
                    align="center"
                >{description}</Typography>
            </CardContent>
        </Card>
    );
}

export default HomepageCard;