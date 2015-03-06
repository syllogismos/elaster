module.exports = {
	mongo: {
		connection: 'mongodb://172.31.28.46:27017/SaveZippy'
	},

	elastic: {
		host: {
			host: 'es.snap1'
		},

		requestTimeout: 5000
	},

	collections: [{
		name: 'DataPoints',
		index: 'savezippy-2015-01-01-05-50',
                // query: ({"st":{ $gte: new Date("2014-12-15"), $lte: new Date("2015-01-01T05:50:00Z")}}),
                // query: ({"st":{ $gte: new Date("2014-12-01"), $lt: new Date("2014-12-15")}}),
                // query: ({"st":{ $gte: new Date("2014-11-15"), $lt: new Date("2014-12-01")}}),
                query: ({"st":{ $lt: new Date("2015-01-01T05:50:00Z")}}),
		type: 'datapoints',
		fields: ['_id', 'public', 'title', 'description', 'user', 'userData']
		}]
};
