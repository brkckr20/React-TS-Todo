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
  try {
    await appDataSource.getRepository(Todo).save({ todo_name: req.body.todo_name });
    res.json({
      status: "success",
      message : "Kayıt işlemi başarılı.."
    });
  } catch (error) {
    console.log(error)
  }
});


router.delete("/:id", async (req: Request, res: Response) => {
  await appDataSource.createQueryBuilder()
    .delete()
    .from(Todo)
    .where("id = :id", { id: parseInt(req.params.id) })
    .execute();
    return res.json({status: "success", message: "Kayıt başarıyla silindi" });
})

export default router;