module.exports.home = function (application, req, res) {
    res.render('home/index', {
        logged: true,
        script: [{
            src: 'js/index.js'
        }]
    })
}

// jumbotron: {
//     title: 'Terrana News',
//     comment: 'Fique ligado nas novidades do mundo cool',
//     item: [{
//         name: 'Viva',
//         src: 'VSGmPpidDvo',
//         comment: 'Liberte Sua Mente'
//     }, {
//         name: 'Guerreie',
//         src: 'MVbeoSPqRs4',
//         comment: 'Acabe com seus Inimigos'
//     }, {
//         name: 'Conquiste',
//         src: 'M_XwzBMTJaM',
//         comment: 'Arranque o mundo de seus inimigos'
//     }]
// },