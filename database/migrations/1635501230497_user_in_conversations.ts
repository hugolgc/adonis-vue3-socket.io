import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserInConversations extends BaseSchema {
  protected tableName = 'conversation_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('conversation_id').unsigned().notNullable().references('id').inTable('conversations')
      table.unique(['user_id', 'conversation_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
