'use strict'

const { withStatusCode } = require('./../../utils/response')

const ok = withStatusCode(200, JSON.stringify)

module.exports.process = async () => {

	return ok({
		'message': 'hello world'
	})

}