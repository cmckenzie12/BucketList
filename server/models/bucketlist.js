var mongoose = require('mongoose');
var bucketlistSchema = new mongoose.Schema(
{
	title: {type:String, required: true},
	description: {type:String, required: true},
	complete: {type: Boolean, default: false},
	taged: {type:String, required: true},
	created_by: {type:String, required: true},
	created_at: {type: Date, default: Date.now}
}
);

mongoose.model('Bucketlist', bucketlistSchema);