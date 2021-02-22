const http = require('http')
const  session = {}
http.createServer(
    (req, res) => {
        if (req.url === '/favicon.ico') {
            res.end('')
            return
        }
        console.log('cookie', req.headers.cookie)


        const sessionKey = 'sid'
        const cookie = req.headers.cookie
        if (cookie && cookie.indexOf(sessionKey) > -1) {
            const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
            const sid = pattern.exec(cookie)[1]
            console.log('session', sid, session, session[sid])
            res.end('come back')
        } else {
            const sid = (Math.random() * 99999999).toFixed()
            res.setHeader('Set-Cookie', `${sessionKey}=${sid};`)
            session[sid] = {name: 'adela'}

            res.end('welcome')
        }

        // res.setHeader('Set-Cookie', 'cookie1=abs1;')
        // res.end('cookie !!!')
    }
).listen(3000)