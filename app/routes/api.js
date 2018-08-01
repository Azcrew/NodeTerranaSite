module.exports = (application) => {    
    application.get('/api', (req, res) => {
        application.config.mongo('user', (err, collection) => {
            collection.find().toArray((err, data) => {
                res.json({ data })
            })
        })
    })
    application.get('/api/:id', (req, res) => {
        res.json({ msg: 'Get By Id', body: req.params.id })
    })
    application.post('/api/', (req, res) => {
        res.json({ msg: 'Post' })
    })
    application.delete('/api/:id', (req, res) => {
        res.json({ msg: 'Delete' })
    })
    application.put('/api/:id', (req, res) => {
        res.json({ msg: 'Put' })
    })
}