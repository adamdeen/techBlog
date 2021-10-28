const app = require('../app.js')
const testRouter = require('../routers/blogs')

app.use(testRouter)

test('blog router should serve up blog html', async () => {
	testRouter.get('/blogs').expect(res).toBe('./views/blogs')
})

