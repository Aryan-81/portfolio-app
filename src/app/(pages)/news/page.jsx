'use client';
import ScrollContainer from "./ScrollContainer";
import Header from "@/components/Header";
import { Card, CardContent, Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import newsData from "@/data/newsData.json";

function News() {
    return (
        <>
            <Header title="News" />
            <ScrollContainer />
            <Container style={{ marginTop: "20px", minHeight: "70vh" }}>
                <br /><br />
                <Grid container spacing={3} justifyContent="center">
                    {newsData.Blogs.map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index} style={{ display: "flex" }}>
                            <Card elevation={5} style={{ width: "100%", display: "flex", flexDirection: "column", height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.heading}
                                    style={{ objectFit: "cover" }}
                                />
                                <CardContent style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <Typography variant="h6" fontWeight="bold">{item.heading}</Typography>
                                    <Typography variant="subtitle2" color="textSecondary">{item.source}</Typography>
                                    <Typography variant="body2" style={{ marginTop: "10px", flexGrow: 1 }}>{item.description}</Typography>
                                    <Button href={item.link} target="_blank" variant="contained" color="primary" style={{ marginTop: "10px", alignSelf: "flex-start" }}>
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br /><br /><br /><br /><br />
        </>
    );
}

export default News;