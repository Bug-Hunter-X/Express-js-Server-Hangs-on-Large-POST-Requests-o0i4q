const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  try {
    const data = req.body;
    // Process the data asynchronously
    await processData(data); //Simulate time-consuming operation
    res.send('Data received');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).send('Error processing data');
  }
});

const processData = async (data) => {
  // Simulate a time-consuming operation
  await new Promise(resolve => setTimeout(resolve, 2000));
  //Process your data here
};

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});