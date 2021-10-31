import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Messages extends BaseSchema {
  protected tableName = 'messages'

  public async up () {
    this.schema.createTable(this.tableName, table => {
      table.increments('id').notNullable().primary()
      table.timestamp('created_at').notNullable()
      table.text('content').notNullable()
      table.integer('user_id').unsigned().notNullable().references('users.id')
      table.integer('conversation_id').unsigned().notNullable().references('conversations.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
