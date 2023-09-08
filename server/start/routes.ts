import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'NotesController.index')
Route.post('/', 'NotesController.create')
Route.get('/:id', 'NotesController.show')
Route.put('/:id', 'NotesController.update')
Route.delete('/:id', 'NotesController.destroy')

