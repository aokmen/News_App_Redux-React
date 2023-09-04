import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNews, getData } from '../features/newsSlice'
import loadingGif from '../assets/loading.gif';

const News = () => {

  const dispatch = useDispatch()
  const {news,loading} = useSelector((state)=>state.newsSlice)
console.log(news);


  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  



  return (
    <>
    {
      loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      ) : (<Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {news?.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={ item.urlToImage}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>dispatch(deleteNews())} >
                Clear
              </Button>
              <Button size="small" href={item.url} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>)


    }    
    </>
  )
}

export default News
