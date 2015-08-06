module.exports = {
	mongo: {
		connection: 'mongodb://mongos0.moengage.com:27017/ESTimeoutErrors'
	},

	elastic: {
		host: {
			host: '172.31.36.27',
                        host: '172.31.36.28'
		},

		requestTimeout: 5000
	},

	collections: [{
		name: 'DataPoints',
		index: '',
                // query: ({"st":{ $gte: new Date("2014-12-15"), $lte: new Date("2015-01-01T05:50:00Z")}}),
                // query: ({"st":{ $gte: new Date("2014-12-01"), $lt: new Date("2014-12-15")}}),
                // query: ({"st":{ $gte: new Date("2014-11-15"), $lt: new Date("2014-12-01")}}),
                // query: ({"st":{ $lt: new Date("2015-01-01T05:50:00Z")}}),
		type: 'datapoints',
		// fields: ['_id', 'public', 'title', 'description', 'user', 'userData']
		}]
};
