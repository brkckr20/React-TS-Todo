import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("not_name").nullable()
      table.text("description").nullable()
      table.string("status").nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      /* table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }) */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
