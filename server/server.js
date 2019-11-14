/**
 * Created by ***
 */
var express = require('express');
var app = express();
 
function renderFullPage(html, initialState) {
      return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>ViewReact</title>
          <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
          <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
          <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
          <script type="text/javascript"  src="http://localhost:3000/lib/vendor.bundle.js"></script>
      
        </head>
        <body>
          <div id="root" class="full-height"></div>
          <script type="text/javascript"  src="http://localhost:3000/lib/main.js"></script>
        </body>
      </html>
      `
}
//     10.6.253.115
app.use(function(req, res){
  res.send(renderFullPage())
});
 
var server = app.listen(8081, function () {
 
  var host = "127.0.0.1";
  var port = "8001"
  console.log("应用实例，访问地址为 "+host+":"+port)
 
})