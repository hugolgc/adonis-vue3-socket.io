export default class AppController {  
  
  index({ view }) {

    return view.render('app')
  }

}