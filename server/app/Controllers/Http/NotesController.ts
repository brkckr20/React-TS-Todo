import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Note from '../../Models/Note';

export default class NotesController {
  public async index({response }: HttpContextContract) {
    const notes = await Database.from("notes");
    return response.json(notes);
  }

  public async create({ request, response }: HttpContextContract) {
    const { not_name } = request.body();

    await Note.create({
      not_name: not_name,
      status : "active"
    })
    return response.json({
      message : "Veri kaydetme işlemi tamamlandı"
    })
  }

  public async store({}: HttpContextContract) {}

  public async show({params,response }: HttpContextContract) {
    const { id } = params;
    const note = await Note.query()
      .where({ id: id })
      .first();
    return response.json({note})
  }

  public async edit({}: HttpContextContract) {}

  public async update({params,request,response }: HttpContextContract) {
    const { id } = params;
    const note = await Note.find(id);

    if (note) {

      if (note.status === "active") {
        note.status = 'completed';
        await note.save()
      } else {
        note.status = 'active';
        await note.save()
      }
    } else {
      console.log("Not bulunamadı");
    }


   // const { not_name, description } = request.body();
  /*  const note = await Note.query()
      .where({ id: id })
      .first();
    note?.merge({
      not_name,
      description
    }).save()
    return response.json({
      message : "Güncellendi"
    }) */
  }

  public async destroy({ params,response }: HttpContextContract) {
    const { id } = params;
    const note = await Note.query()
      .where({ id: id })
      .first();
    await note?.delete();
    return response.json({
      message :"Silindi"
    })
  }

}
