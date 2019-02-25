import * as express from 'express';
import Person from './person';
import {IController} from '../utils/IController';
export class PersonController implements IController {
    public path = '/person';
    public router = express.Router();
   
    private persons: Person[] = [
      {
        Age: 1,
        Name: 'Dolor sit amet'
      }
    ];
   
    constructor() {
      this.intializeRoutes();
    }
   
    public intializeRoutes() {
      this.router.get(this.path, this.getAllPersons);
      this.router.post(this.path, this.createAPerson);
    }
   
    getAllPersons = (request: express.Request, response: express.Response) => {
      response.send(this.persons);
    }
   
    createAPerson = (request: express.Request, response: express.Response) => {
      const post: Person = request.body;
      this.persons.push(post);
      response.send(post);
    }
  }
   
  