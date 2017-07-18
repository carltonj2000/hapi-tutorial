var baseRoutes = {
  register: function (server, options, next) {

    // add “hello world” route
    server.route([{
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply('Hello Future Studio!')
      }
    },{
      method: ['POST', 'PUT'],
      path: '/',
      handler: function (request, reply) {
        // process the request's payload ...
        reply('Created a new instance.')
      }
    },{
      method: 'GET',
      path: '/hi',
      handler: function (request, reply) {
        reply.view('hi', {name: 'Carlton', fruits: ['apple', 'orange', 'pear'], dog: 'topper'})
      }
    },{
      method: 'GET',
      path: '/page/{page}',
      handler: function (request, reply) {
        // process the request's payload ...
        reply('You got page ' + +encodeURIComponent(request.params.page))
      }
    },{
      method: 'GET',
      path: '/js/{file*}',
      handler: {
        directory: {
          path: 'js'
        }
      }
    }])

    next()
  }
}

baseRoutes.register.attributes = {
  name: 'base-routes',
  version: '1.0.0'
}

module.exports = baseRoutes
