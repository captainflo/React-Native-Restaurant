import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer oEXIqJT0eOUGPfSfWUfR6y9i8lA4a9hHaq-GUDlVfNhj9YTSkBuXm19h0LLYftjDBgmbit_v69Jkyfu88r0EH30KEu4BFbVk7laCa_x36ajVYeEbFTL1JjYoUoWkXXYx'
    }
});

