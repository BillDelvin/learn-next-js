import axios from 'axios';

export default async (req, res) => {
 if (req.method === 'POST') {
  const postData = req.body;
  console.log(postData);

  return res.json({ message: 'Saving post to db!', ...postData });
 } else {
  const getData = await axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
   return res.data;
  });
  return res.json(getData.slice(0, 20));
 }
};
