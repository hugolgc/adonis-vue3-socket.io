import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle ({ auth, response }: HttpContextContract, next: () => Promise<void>) {

    await auth.use('web').check()

    if (auth.use('web').isLoggedIn) {
      response.redirect('/app')
    }

    await next()
  }
}
