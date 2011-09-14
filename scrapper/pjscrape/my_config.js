pjs.addSuite({
    // single URL or array
    url: 'http://www.iefp.pt',
    // single function or array, evaluated in the client

	moreUrls: 'a',
    maxDepth: 1,
    // function to get some data
    scraper: function() {
        return { 
            link: $('a').text(),
        }
    }
});