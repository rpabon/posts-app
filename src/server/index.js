import express from 'express';
import path from 'path';

const htmlTemplate = () => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Page Title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
      <script src="main.js"></script>
  </head>
  <body>
    <h1>Server running...</h1>
  </body>
  </html>
`;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate());
});

app.listen(1337);
