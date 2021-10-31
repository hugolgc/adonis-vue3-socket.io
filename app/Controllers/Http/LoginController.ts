import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import View from '@ioc:Adonis/Core/View'

export default class LoginController {  
  
  index({ view }) {

    return view.render('login')
  }

  async store({ auth, request, response, view }) {

    let user = {}
    const { username, password } = request.all()

    try {
      user = await User.query().where('slug', username).firstOrFail()
    } catch (e) {
      return view.render('login', { error: "Ce pseudo n'est pas connu" })
    }

    if (!(await Hash.verify(user.password, password))) {
      return view.render('login', { error: "Le mot de passe ne correspond pas" })
    }

    await auth.use('web').login(user)
    
    response.redirect('/app')
  }

  async delete({ auth, response }) {

    await auth.use('web').logout()

    response.redirect('/')
  }
}