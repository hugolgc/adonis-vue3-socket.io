import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Conversations extends BaseSchema {
  protected tableName = 'conversations'

  public async up () {
    this.schema.createTable(this.tableName, table => {
      table.increments('id').notNullable().primary()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
