const models = require('../models/index.js');
const user = require('./sampledata/users.js');
const dive_data = require('./sampledata/divesites.js');
const comment_data = require('./sampledata/comments.js')

//saves seed data to database
data_data.divesites.forEach(function (site) {
	models.dive_sites.post(site, function(err, data) {
		if( err ) {
			console.log(err);
		} else {
			console.log('saved dive-site to database');
		}
	})
})

user.users.forEach(function(user) {
	models.users.post(user, function(err, data) {
		if ( err ) {
			console.log(err);
		} else {
			console.log('saved user to database');
		}
 	})
})
comment_data.comments.forEach(function (comment)) {
	models.comments.post(comment, function(err, data) {
		if( err ){
			console.log('Error in posting comment to database from worker')
		} else {
			console.log('Saved comment to database')
		}
	})
}