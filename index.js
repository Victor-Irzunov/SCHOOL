
//-------------START----------------

const express = require('express')
const path = require('path')

//** ----------------------------------
const Handlebars = require('handlebars')
//** ----------------------------------
const exphbs = require('express-handlebars')
//** -----------------------------------------
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const mongoose = require('mongoose')


const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const kursRouter = require('./routes/kurs')
const cardRoutes = require('./routes/card')

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})


// Вот это Саша

// app.engine('hbs', exphbs({
// 	handlebars: allowInsecurePrototypeAccess(Handlebars)
// }))


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')


app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/kurs', kursRouter)
app.use('/card', cardRoutes)

const PORT = process.env.PORT || 3000

async function start() {
	try {
		const url = `mongodb+srv://Victor-school:uG73dLnsUETlKVzf@cluster0.6aeiv.mongodb.net/shop`
		         //mongodb+srv://<username>:<password>@cluster0.6aeiv.mongodb.net/<dbname>?retryWrites=true&w=majority
		await mongoose.connect(url,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
		app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`))
	}
	catch (e) {
		console.log('+++ошибка1', e , '+++ошибка2')
	}
}
start()

//Victor-school:uG73dLnsUETlKVzf

