import { createServer } from 'node:http'
import { error } from 'node:console'
import { request } from 'node:https'

const server = createServer((req, res) => {
  const proxy = request({
    headers: {
      ...req.headers,
      host: 'zd-527365.netlify.app',
      'x-forwarded-host': 'zd-527365.onrender.com'
    },
    hostname: 'zd-527365.netlify.app',
    method: req.method,
    path: req.url,
    port: 443
  }, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers)

    proxyRes.pipe(res, {
      end: true
    })
  })

  req.pipe(proxy, {
    end: true
  })

  proxy.on('error', (err) => {
    error('Proxy error:', err)
    res.writeHead(500)
    res.end('Proxy error')
  })
})

server.listen(3000, () => {
  console.log('Proxy server running at http://localhost:3000')
})
