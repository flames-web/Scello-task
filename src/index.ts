import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './sequelize';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);1
  });

