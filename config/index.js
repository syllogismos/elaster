module.exports = {
	mongo: {
		connection: 'mongodb://172.31.28.46:27017/Snapdeal'
	},

	elastic: {
		host: {
			host: 'localhost'
		},

		requestTimeout: 5000
	},

	collections: [{
		name: 'DataPoints',
		index: 'snapdeal',
		type: 'datapoints',
		fields: ['_id', 'public', 'title', 'description', 'user', 'userData'],
                mappings: {
                          'datapoints': {
                             'properties': {
                               'categoryid': {
                                     'type': 'string'
                                  }
                              }
                          }
                         }
		}]
};
