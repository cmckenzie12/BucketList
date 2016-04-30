var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
{
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	bucketlist  :[{ type: mongoose.Schema.Types.Mixed, ref: "bucketlists" }]
}
);

mongoose.model('User', userSchema);



