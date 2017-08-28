var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();

// var phpExpress = require('php-express')({
 
//   // assumes php is in your PATH
//   binPath: '/usr/bin/php' 
// });

// set view engine to php-express
// var path = require ('path');
// app.use(express.static(path.join('./views')));
// app.engine('php', phpExpress.engine);
// app.set('view engine', 'php');
app.set('view engine', 'html');
// app.set('views', './views');
 
// routing all .php file to php-express
// app.all(/.+\.php$/, phpExpress.router);
 
// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('PHPExpress app listening at http://%s:%s', host, port);
// });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());






app.get("/", function(req, res){
    res.render("home");
});

app.get("/googlef19f46162e1fd620.html", function(req, res){
    res.render("googlef19f46162e1fd620");
});

app.get("/robots.txt", function(req, res){
    res.render("robots.txt");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});
app.get("/sent", function(req, res){
    res.render("sent");
});
app.get("/error", function(req, res){
    res.render("error");
});
app.get("/google87d6fc21d3be6b52.html", function(req, res){
    res.render("google87d6fc21d3be6b52");
});


app.post("/contact/send", function(req, res){
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "leafletcareforyourbusiness@gmail.com",
          pass: "password2017"
      }
      
    });
    
    var mailOptions = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        from: "Leaflet Care <leafletcareforyourbusiness@gmail.com>",
        to: "leafletcareforyourbusiness@gmail.com",
        subject: "LeafletService",
        text: "You have a submission with the following details...  Quote?: " + req.body.quote + "Query?: " + req.body.query +  "Name: " + req.body.name + "Company/Organization: " + req.body.company + "Post Code: " + req.body.postcode + "Contact Number: " + req.body.contactNumber + "Email: " + req.body.email + "Message: " + req.body.message,
        html: "<p>You have a submission with the following details...</p><ul><li>Quote?: " + req.body.quote + "</li><li>Query?: " + req.body.query +  "</li><li>Name: " + req.body.name + "</li><li>Company/Organization: " + req.body.company + "</li><li>Post Code: " + req.body.postcode + "</li><li>Contact Number: " + req.body.contactNumber + "</li><li>Email: " + req.body.email + "</li><li>Message: " + req.body.message + "</li></ul>"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.redirect("/error");
        }else{
            console.log("Message has been sent"+info.response);
            res.redirect("/sent");  
            
        }
        
    });
});

// app.get("/form", function(req, res){
//     res.render("form.php");
// });


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("LeafletService server is running!")
});