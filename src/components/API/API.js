import axios from 'axios';

export const fetchImage = async (newQuery, newPage) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '29901563-7c305ed84deb121c33dc20bd7',
      q: newQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: newPage,
    },
  });
  return response.data.hits;
};
