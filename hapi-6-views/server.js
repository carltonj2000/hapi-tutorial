#!/usr/bin/env node

const Hapi = require('hapi')
const Good = require('good')
const Vision = require('vision')
const Pug = require('pug')

// create a server with a host and port
var server = new Hapi.Server()

// add server’s connection information
server.connection({
  host: 'localhost',
  port: 3000
})

// register plugins to server instance
server.register([{
  register: Good,
  options: {
    ops: {
      interval: 10000
    },
    reporters: {
      console: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [ { log: '*', response: '*', request: '*' } ]
        },
        {
          module: 'good-console'
        },
        'stdout'
      ]
    }
  }},{
    register: require('inert')
  },{
    register: Vision,
  }, {
    register: require('./base-routes')
  }],
  function (err) {
    if (err) {
      console.error(err);
      throw err;
    }

    server.views({
      engines: {
        pug: Pug
      },
      path: __dirname + '/templates'
    })

    // start your server
    server.start(function(err) {
      if (err) {
        throw err
      }

      server.log('Server running at: ', server.info.uri)
    })
})
