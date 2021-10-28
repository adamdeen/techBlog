/* eslint-disable no-undef */
describe('BLOG PAGE', function() {
  
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('open blogs page', () => {
		cy.get(':nth-child(2) > .nav-link').click()
		cy.location('pathname').should('include', 'blogs')
	})

	it('open a blog', () => {
		cy.get(':nth-child(2) > .nav-link').click()
		cy.location('pathname').should('include', 'blogs')
		cy.get(':nth-child(1) > .card-body > .btn').click({force: true})
		cy.location('pathname').should('include','teaching-code')
	})

	it('go back to previous page', () => {
		cy.get(':nth-child(2) > .nav-link').click()
		cy.location('pathname').should('include', 'blogs')
		cy.get(':nth-child(1) > .card-body > .btn').click({force: true})
		cy.location('pathname').should('include','teaching-code')
		cy.go('back')
		cy.location('pathname').should('not.include','teaching-code')
	})

	it('go forward a page', () => {
		cy.get(':nth-child(2) > .nav-link').click()
		cy.location('pathname').should('include', 'blogs')
		cy.get(':nth-child(1) > .card-body > .btn').click({force: true})
		cy.location('pathname').should('include','teaching-code')
		cy.go('back')
		cy.location('pathname').should('not.include','teaching-code')
		cy.go('forward')
		cy.location('pathname').should('include','teaching-code')
	})

	it('go home from nav bar', () => {
		cy.get(':nth-child(2) > .nav-link').click()
		cy.location('pathname').should('include', 'blogs')
		cy.get(':nth-child(1) > .nav-link').click()
		cy.location('pathname').should('not.include','blogs')
	})

	it('check homepage messages', () => {
		cy.get('.welcome').should('be.visible').should('have.text','Welcome to the techBlog!')
		cy.get('.welcome_message').should('be.visible').should('have.text','An all new technical blogging site for ECS')
	})

	it('check navbar exists and contains page buttons', () => {
		cy.get('.navbar').should('be.visible')
		cy.get('#navbarSupportedContent').contains('Home')
		cy.get('#navbarSupportedContent').contains('Blogs')
		cy.get('.navbar').contains('techBlog')
	})

	it('Check blogs exist on blogs page', () => {
		cy.get(':nth-child(2) > .nav-link').click()
		cy.location('pathname').should('include', 'blogs')
		cy.get(':nth-child(1) > .card-body > .card-title').should('have.text','Teaching Code')
		cy.get(':nth-child(2) > .card-body > .card-title').should('have.text','IDC Event')
		cy.get(':nth-child(3) > .card-body > .card-title').should('have.text','Milestones')
	})
})
