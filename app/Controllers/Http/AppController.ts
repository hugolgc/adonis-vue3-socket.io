import User from 'App/Models/User'

export default class AppController {  
  async index({ view, session }) {

    const user = await User.query().where('id', session.get('auth_web')).preload('conversations', conversations => {
      conversations.preload('messages', messages => messages.preload('user'))
      conversations.preload('users')
    }).first()

    const allUsers = await User.query().whereNot('id', session.get('auth_web'))

    return view.render('app', { user: JSON.stringify(user), allUsers: JSON.stringify(allUsers) })
  }
}