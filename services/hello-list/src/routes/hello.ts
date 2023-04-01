import { Hello } from '@vue3-mono/interfaces';
import express, { Request, Response, Router } from 'express';

export const helloRouter: Router = express.Router();

var helloList: Hello[] = [];


/* GET hello listing. */
helloRouter.get('/',function(req: Request, res: Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(helloList));
});

/* POST hello listing. */
helloRouter.post('/', function(req: Request, res: Response) {
  helloList.push(req.body.name);
  res.sendStatus(200);
});
