import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Message from './Message'
import User from './User'

export default class Conversation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Message)
  public messages: HasMany<typeof Message>

  @manyToMany(() => User)
  public users: ManyToMany<typeof User>
}
