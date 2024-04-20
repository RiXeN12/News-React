import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { loadList } from '../../store/reducers/NewsReducer/actions';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Page = ({ news, TotalResult, loadList }) => {
    // console.log("TotalRes: "+TotalResult);
    // console.log("Length:"+news.length);
    const [firstNews, setFirstNews] = useState(null);
    const [restNews, setRestNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(7)

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage + 1;
    const mainNews = lastPostIndex - postsPerPage;

    let pages = [];

    for (let i = 1; i < Math.ceil(news.length/postsPerPage); i++) {
        pages.push(i)
    }


    useEffect(() => {
        loadList();
    }, [loadList]);

    useEffect(() => {
        if (news.length > 0) {
            setFirstNews(news[mainNews]);
            setRestNews(news.slice(firstPostIndex, lastPostIndex));
        }
        
    }, [news, TotalResult, currentPage, postsPerPage]);

    return (
        <>
            <Box sx={{ width: '90%' }}>
                {firstNews && (
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <ListItem>
                                <div>
                                    <CardMedia
                                        component="img"
                                        alt="no image"
                                        height="440"
                                        image={firstNews.urlToImage}
                                    />
                                </div>
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <CardContent>
                                    <Typography gutterBottom color="error" variant="h2" component="div">
                                        {firstNews.title}
                                    </Typography>
                                    <Typography variant="h4" color="textSecondary">
                                        {firstNews.description}
                                    </Typography>
                                    <Link to={`news/${mainNews}`}>
                                        <Typography variant="h6" color="black" sx={{ textDecoration: 'underline' }}>
                                            {"More"}
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </ListItem>
                        </Grid>
                    </Grid>
                )}
            </Box>
            <Box marginTop={2} sx={{ width: '90%' }}>
                <Grid container spacing={2}>
                    {restNews.map((article, index) => (
                        <Grid item xs={4} key={index}>
                            <ListItem>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        alt="no image"
                                        height="240"
                                        image={article.urlToImage}
                                    />
                                    <Typography gutterBottom color="textPrimary" variant="h5" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        {article.description}
                                    </Typography>
                                    <Link to={`news/${index+firstPostIndex}`}>
                                        <Typography variant="h6" color="black" sx={{ textDecoration: 'underline' }}>
                                            {"More"}
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div style={{
                    display: "flex",
                    justifyContent:"center",
                    justifyItems:"center",
                    marginRight:"2rem"
                }}>
                    <Button onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                        }
                    }}>
                        <ArrowBackIosIcon />
                    </Button>
                    {pages.map((page,index) => {
                            return  ( 
                                    <Button variant="outlined" key={index} onClick={() => setCurrentPage(page)} style={{
                                        margin:"10px"
                                    }}>{page}</Button>
                        )
                    })}
                    <Button onClick={() => {
                        if (pages.length > currentPage) {
                            setCurrentPage(currentPage + 1);
                        }
                    }}>
                        <ArrowForwardIosIcon/>
                    </Button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    news: state.news.list,
    TotalResult: state.news.TotalResult
});

const mapDispatchProps = {
    loadList
};

export default connect(mapStateToProps, mapDispatchProps)(Page);

