import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"


export const getData = createAsyncThunk(
  "newsSlice/getData",

  async () => {
    const {data} = await axios("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb")
    return data.articles;
  }


)

export const newsSlice = createSlice ({
  name: 'newsSlice',
  initialState:{
    news:[],
    loading:true,
    error:""
  },
 
  reducers: {
   deleteNews: (state) => {
    state.news=[]
   }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state, action) => {
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { deleteNews} = newsSlice.actions;

export default newsSlice.reducer
