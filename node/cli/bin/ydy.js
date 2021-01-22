#!/usr/bin/env node

const program = require('commander') 
program.version(require('../package').version)


program
    .command('init <name>')
    .description('init project')
    .action(require('./init'))

program
    .command('refresh') 
    .description('refresh routers...') 
    .action(require('./refresh'))

program.parse(process.argv)