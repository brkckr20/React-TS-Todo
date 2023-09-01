import * as express from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '../app-data-source';

import { Todo } from '../entity/Todo';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const todos = await appDataSource.getRepository(Todo).find();
    res.json(todos);
});

router.post("/", async (req: Request, res: Response) => {
    console.log(req.body);
  //  await appDataSource.getRepository(Todo).create(req.body);
    res.send("basarili");
});

export default router;