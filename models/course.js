//!здесь описыаем св-ва данной модели в схеме(её регистрируем в mongoose, описываеи какие будут поля)

const { Schema, model } = require('mongoose')     //{} забрать опред обьекты из пакета мангус //Schema класс // model ф-ция

const course = new Schema({
	title: {                          //название курса
		type: String,
		required: true                 //обозначаем что данное поле необходимо для создания модели без него будет ошибка
	},
	price: {
		type: Number,
		required: true
	},
	img: String
})

module.exports = model('Course', course)   //course схема выше
