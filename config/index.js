var mongo = require('mongojs');

module.exports = {
	mongo: {
		connection: 'mongodb://mongos0.moengage.com:27017/ESTimeoutErrors'
	},

	elastic: {
		host: {
			host: '172.31.43.107'
		},

		requestTimeout: 100
	},

	collections: [{
		name: 'DataPoints',
		index: '',
                // query: ({'indexName': {$regex: '^spothero'}}),
                // query: ({"st":{ $gte: new Date("2014-12-15"), $lte: new Date("2015-01-01T05:50:00Z")}}),
                // query: ({"st":{ $gte: new Date("2014-12-01"), $lt: new Date("2014-12-15")}}),
                // query: ({"st":{ $gte: new Date("2014-11-15"), $lt: new Date("2014-12-01")}}),
                // query: ({"st":{ $lt: new Date("2015-01-01T05:50:00Z")}}),
                query: ({"_id": { $lt: objectIdWithTimestamp('2016/02/09')}}),
		type: 'datapoints',
		// fields: ['_id', 'public', 'title', 'description', 'user', 'userData']
		}]
};


function objectIdWithTimestamp(timestamp) {
    // Convert string date to Date object (otherwise assume timestamp is a date)
    if (typeof(timestamp) == 'string') {
        timestamp = new Date(timestamp);
    }

    // Convert date object to hex seconds since Unix epoch
    var hexSeconds = Math.floor(timestamp/1000).toString(16);

    // Create an ObjectId with that hex timestamp
    var constructedObjectId = mongo.ObjectId(hexSeconds + "0000000000000000");
    // console.log(constructedObjectId)

    return constructedObjectId
}
