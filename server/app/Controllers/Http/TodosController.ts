import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Database from '@ioc:Adonis/Lucid/Database'

export default class TodosController {
  public async index({ response }: HttpContextContract) {
    //const todos = await Database.from("todos");
    return response.send("todos");
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
