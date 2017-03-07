var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(process.env PORT || 3000, function(){  //3000 port is reserved for development
	console.log("listening on 80 or 3000");
});

	

/*Go to terminal 
npm init  to create package json
npm install --save express

go to folder Cookie Confectionary
heroku login
enter email
enter password
heroku create

Megans-MacBook-Air:Cookie Confectionary meganevans$ heroku create
Creating app... done, ⬢ thawing-headland-96719
git init
git status
git add .
git status
*/


