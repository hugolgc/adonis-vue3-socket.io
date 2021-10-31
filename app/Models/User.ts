import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Conversation from './Conversation'
import Message from './Message'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public slug: string

  @column()
  public name: string

  @column()
  public password: string

  @column()
  public picture: string

  @hasMany(() => Message)
  public messages: HasMany<typeof Message>

  @manyToMany(() => Conversation)
  public conversations: ManyToMany<typeof Conversation>
}