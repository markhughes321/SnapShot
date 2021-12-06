/// <reference types="cypress" />

context('API Tests', () => {
    beforeEach(() => {
      cy.request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=foo&per_page=24&format=json&nojsoncallback=1').as('flickr')
    })

    it('Verfies the Flickr API is working as expected', function() {
    cy.get('@flickr').should(response => {
        expect(response).property('status').to.equal(200)
        expect(response.body.photos).property('perpage').to.equal(24)
        expect(response.body.photos.photo).to.be.a('array')
        expect(response.body.photos.photo[0]).to.have.all.keys(
            'id', 'owner', 'secret', 'server', 'farm', 'title', 'ispublic', 'isfriend', 'isfamily')
        expect(response.body.photos.photo).to.have.length(24)
        })
    })     
});