import { Container, Typography, CardMedia, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircularProgress from '@mui/material/CircularProgress';

const NewsPage = ({ news }) => {
    const { index } = useParams();
    const [selectedNews, setSelectedNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const indexNumber = parseInt(index);

        if (news.length > 0 && news[indexNumber]) {
            setSelectedNews(news[indexNumber]);
            setLoading(false);
        }
    }, [news, index]);

    return (
        <Container>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    {selectedNews ? (
                        <Box marginBottom={'10%'}>
                            <Box my={4}>
                                <Typography gutterBottom color="error" variant="h2" component="div">
                                    {selectedNews.title}
                                </Typography>
                                <Typography gutterBottom color="grey" variant="subtitle1">
                                    <AccessTimeIcon fontSize='small' />
                                    {selectedNews.publishedAt}
                                </Typography>
                            </Box>
                            {selectedNews.urlToImage ? (
                                <CardMedia
                                    component="img"
                                    sx={{ maxHeight: 450, display: { xs: 'none', sm: 'block' } }}
                                    image={selectedNews.urlToImage}
                                    alt="image"
                                />
                            ) : (
                                <CardMedia
                                            component="img"
                                            sx={{ maxHeight: 250,minWidth: 500 , display: { xs: 'none', sm: 'block' } }}
                                            image="https://thumb.ac-illust.com/18/185fe60d543230116f69f3b41238a90d_t.jpeg"
                                            alt="image"
                                        />
                            )}
                            <Typography gutterBottom color="error" variant="h5">
                                {"Author: " + (selectedNews.author || "Unknown")}
                            </Typography>
                            <Box px={2} mt={2}>
                                <Typography gutterBottom color={'black'} variant="h5">
                                    {selectedNews.description || "No description available"}
                                </Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Typography variant="body1">No news found</Typography>
                    )}
                </>
            )}
        </Container>
    );
}

const mapStateToProps = (state) => ({
    news: state.news.list
});

export default connect(mapStateToProps)(NewsPage);