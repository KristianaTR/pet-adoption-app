import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001',
}));

dotenv.config();

app.get('/get-petfinder-token', async (req, res) => {
  try {
    // Make a request to obtain the Petfinder API access token
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: process.env.REACT_APP_PETFINDER_API_KEY,
      client_secret: process.env.REACT_APP_PETFINDER_API_SECRET_KEY,
    });

    const accessToken = response.data.access_token;

    // Send the access token to the frontend
    res.json({ accessToken });
  } catch (error) {
    console.error('Error fetching Petfinder access token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static('public'));
  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
