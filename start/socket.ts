import Conversation from 'App/Models/Conversation'
import Message from 'App/Models/Message'
import Ws from 'App/Services/Ws'
Ws.boot()

Ws.io.on('connection', socket => {

  socket.on('addMessage', async data => {

    const create = await Message.create(data)
    const message = await Message.query().where('id', create.id).preload('user').first()

    Ws.io.emit('setMessages', message)
  })

  socket.on('addConversation', async data => {

    const create = await Conversation.create({})
    await create.related('users').sync(data)

    const conversation = await Conversation.query().where('id', create.id).preload('users').preload('messages').first()

    Ws.io.emit('setConversations', conversation)
  })
})
