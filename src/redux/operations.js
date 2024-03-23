import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65fc9a8f9fc4425c6530800a.mockapi.io/advert';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
