pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'csv',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'stdout',
    //outFile: 'scrape_output.json'
});


pjs.addSuite({
    // single URL or array
    url: 'http://www.iefp.pt',
    // single function or array, evaluated in the client

	moreUrls: function(){return _pjs.getAnchorUrls('a');},
    maxDepth: 999,
    // function to get some data
    scraper: function() {
        return { 
            link: $('a').attr('href')
        }
    }
});
