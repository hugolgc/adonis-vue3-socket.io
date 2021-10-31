import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Conversation from './Conversation'
import User from './User'

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public createdAt: DateTime

  @column()
  public content: string

  @column()
  public userId: number

  @column()
  public conversationId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Conversation)
  public conversation: BelongsTo<typeof Conversation>
}