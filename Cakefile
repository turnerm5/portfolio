{exec} = require 'child_process'
task 'sbuild', 'Build project from src/*.coffee to lib/*.js', ->
  exec 'coffee --compile --output js/ src/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr