import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Note from '../../app/Models/Note'

export default class extends BaseSeeder {
  public async run () {
    await Note.create({
      not_name: "deneme 1,2,3",
      description : "bu bir açıklama"
    })
  }
}
