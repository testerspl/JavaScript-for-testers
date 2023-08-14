class Api {


    addApiDocument(url = '', params = {}) {

        fetch(url, params)
    }
}

new Api().addApiDocument('testerzy.pl',{
    method: 'POST',
    body: {
        login: 'user3'
    },
    headers:['content-type', 'txt/html']

})
new Api().addApiDocument('demo.testarena.pl',{
    method: 'POST',
       body: {
        login: 'user4'
    },
    headers:['content-type', 'XML']
})
new Api().addApiDocument('onet.pl',{
    method: 'POST',
    body: {
        login: 'userAdmin'
    },
    headers:['content-type', 'JSON']
    
})