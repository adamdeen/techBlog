const express = require('express')
const router = new express.Router()

router.get('/blogs', (req, res) => {
	res.render('blogs', {
		layout: 'index'
	})
})

router.get('/blogs/teaching-code', (req, res) => {
	res.render('blogs/teaching-code', {
		layout: 'index'
	})
})

router.get('/blogs/idc-event', (req, res) => {
	res.render('blogs/idc-event', {
		layout: 'index'
	})
})

router.get('/blogs/milestones', (req, res) => {
	res.render('blogs/milestones', {
		layout: 'index'
	})
})

module.exports = router