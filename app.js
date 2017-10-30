var
  express = require('express'),
  path = require('path'),
  app = express();

app.use(express.static(path.join(__dirname, 'www')));
app.use('/public', express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server running on port %s', port);
});
