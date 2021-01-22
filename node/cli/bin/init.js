const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download') 
// const open = require("open")

const spawn = async (...args) => {
    const { spawn } = require('child_process'); 
    return new Promise(resolve => { 
        const proc = spawn(...args) 
        proc.stdout.pipe(process.stdout) 
        proc.stderr.pipe(process.stderr)
    
        proc.on('close', () => {
            resolve()
        })
    })
}

module.exports = async name => { 
    // console.log('init ' + name) 
    log('🚀创建项目:' + name) 
    // 从github克隆项目到指定文件夹 
    await clone('github:su37josephxia/vue-template', name) 

    log('安装依赖') 
    await spawn('cnpm', ['install'], { cwd: `./${name}` }) 
    log(chalk.green(` 
👌安装完成： 
To get Start:
=========================== 
cd ${name} 
npm run serve 
===========================
    `))

    // 打开浏览器 
    // open(`http://localhost:8080`); 
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}