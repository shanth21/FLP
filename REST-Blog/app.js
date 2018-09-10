var express = require("express");
var app = express();
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");
var bodyParser = require("body-parser");
mongoose = require("mongoose");

//APP CONFIG  
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressSanitizer());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//Mongoose Model/Schema
var blogSchema = mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now()}
});

var Blog = mongoose.model("Blog", blogSchema);
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true } );


//REST Routing
app.get("/", function(req, res){
  res.redirect("/blogs");
});

//INDEX ROUTE
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, allBlogs){
    if(err){
      console.log("Error getting blog content!!");
    }else{
      res.render("index", {blogs: allBlogs});
    }
  })
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
  res.render("new");
})

//CREATE ROUTE
app.post("/blogs", function(req, res){
  //create blog
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    }else{
      res.redirect("/blogs");
    }
  })
})

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
     if(err){
       res.redirect("/blogs");
     }else{
       res.render("show", {blog: foundBlog});
     }
   })
})

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    }else{
      res.render("edit", {blog: foundBlog}); 
    }
  })
})

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      res.redirect("/blogs");
    }else{
      res.redirect("/blogs/" + req.params.id);
    }
  })
})

//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      red.redirect("/blogs");
    }else{
      res.redirect("/blogs");
    }
  })
})

app.listen(3003, function(){
  console.log("Server is running!")
});