const express = require('express')
const next = require('next')
const config = require('./config')

const app = next({ dev: false })
const handle = app.getRequestHandler()

async function main() {
	await app.prepare()
	const server = express()
	server.get('*', (req, res) => handle(req, res))
	server.listen(config.port, config.host, () => {
		console.log('server listening')
		console.log(`\thost: ${config.host}`)
		console.log(`\tport: ${config.port}`)
	})
}

main()
