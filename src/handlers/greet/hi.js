'use strict'

const { isEmpty } = require('lodash')

const { withStatusCode } = require('./../../utils/response')
const { params } = require('./../../utils/request')

const ok = withStatusCode(200, JSON.stringify)

module.exports.process = async event => {

	const { name } = params(event)

	return ok({
		'message': `hi ${ isEmpty(name) ? 'karen' : name }`
	})

}