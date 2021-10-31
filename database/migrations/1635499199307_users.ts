import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, table => {
      table.increments('id').notNullable().primary()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.string('picture').notNullable().defaultTo('default.png')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}