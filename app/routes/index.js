module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.home(application, req, res)
    })
    application.post('/', function (req, res) {
        application.app.controllers.user.login(application, req, res)
    })

    /* TEMPORARIA */

    application.get('/create', (req, res) => {
        res.render('create');
    })
    application.post('/create', (req, res) => {
        var post = req.body


        const user = {
            name: post.name,
            race: post.race,
            class: post.class,
            level: 1,
            exp: 0,
            excel: 0,
            carac: {
                arm: post.arm,
                foc: post.foc, 
                for: post.for, 
                hab: post.hab, 
                res: post.res, 
                pre: post.pre,
            },
            focus: {
                ag: post.ag,
                ar: post.ar, 
                fo: post.fo, 
                lu: post.lu, 
                te: post.te, 
                tr: post.tr,
            },
            vant: post.vant,
            desv: post.desv,
            peri: post.peri
        }

        application.config.mongo('character', (err, collection) => {
            if (err) throw (err);
            collection.find({ name: user.name }).toArray(function (err, data) {
                if (err) throw (err);
                if (data.length == 0) {
                    collection.insert(user)
                    res.send(user)
                    // res.send('Criado com sucesso')
                }
                else res.send('Erro ao criar')
            })
        })
    })
}