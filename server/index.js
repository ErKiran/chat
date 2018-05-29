const express= require('express');
const path = require('path');
const publicpath=path.join(__dirname,'../public');
var app=express();
app.use(express.static(publicpath));
const port=process.env.PORT || 4000;
app.listen(port,() =>
{
	console.log('Server is up and running at port  '+ port );
});