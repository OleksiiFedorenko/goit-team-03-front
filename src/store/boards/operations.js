import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const needHelp = createAsyncThunk('help', async (user, thunkAPI) => {
    try {
      const response = await axios.post('/api/help/email', {
        replyEmail: user.email,
        comment: user.text,
      });
      Notiflix.Notify.success('Your Email Send, we will contact you!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
    }
  });