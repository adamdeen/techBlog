const express = require('express')
const blogRouter = require('./routers/blogs')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000 // localhost:3000/

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
	layoutsDir: __dirname + '/views/layouts',
	extname: 'hbs',
	defaultLayout: 'index'
}))

app.use(blogRouter)

app.get('/', (req, res) => {
	res.render('main', {
		layout: 'index'
	})
})


app.listen(port, () => console.log('Listening on port 3000'))

module.exports = app