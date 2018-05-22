var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){//pass in environment someday
        return `mongodb://${configValues.userName}:${configValues.password}@ds231070.mlab.com:31070/nodetododb`;
    }
}