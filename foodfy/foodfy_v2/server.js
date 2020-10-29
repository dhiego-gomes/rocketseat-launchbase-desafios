const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')
const dataAbout = require('./data-about')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: true,
    noCache: true
})

server.get('/', function(req, res){
    return res.render('index', { items: data.recipes })
})

server.get('/about', function(req, res){
    return res.render('about', { dataAbout, item: dataAbout } )
})

server.get('/recipes', function(req, res){
    return res.render('recipes', { items: data.recipes })
})

server.get('/recipe/:index', function(req, res){
    const recipes = [...data.recipesData]
    const recipeIndex = req.params.index

    // console.log(recipes[recipeIndex])
    
    return res.render('recipe', { recipes: recipes[recipeIndex] })    
})

server.get('/not-found', function(req, res){
    return res.render('not-found')
})

server.use(function(req, res){
    res.status(404).render('not-found')
})

server.listen(5500, function(){
    console.log('servidor funcionando >>>')
})