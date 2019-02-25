import App from './app';
import {PersonController} from './person/person-controller'
 
const app = new App(
  [
    new PersonController(),
  ],
  5000,
);
 
app.listen();