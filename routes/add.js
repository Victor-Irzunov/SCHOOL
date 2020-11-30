const { Router } = require('express')                              //можно const express.Router  //но сраже заберем что нас интересует {Router}
const router = Router()
const Course = require('../models/course')


router.get('/', (req, res) => {                                           //обрабатывать различные запросы          //         '/' показывает кокой url мы обрабатываем
	res.render('add', {
		title: 'Добавитььь',
		isAdd: true
	})
})

router.post('/', async (req, res) => {                       //router.post позволяет создать новый курс
	// console.log(req.body, '*/-/--******--**---///')
	const course = new Course({
		title: req.body.title,
		price: req.body.price,
		img: req.body.img
	})
	try {
		await course.save()     //тк возвращает промис можем подождать с помощью await //.save() идет в БД и сохраняет данную модель в опред колекции
		res.redirect('/kurs')
	}
	catch (e){
		console.log(e)
	}
})

module.exports = router