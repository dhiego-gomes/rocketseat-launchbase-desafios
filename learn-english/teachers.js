const fs = require('fs')
const data = require('./data.json')
const Intl = require('intl')
const { age, date, graduation } = require('./utils')

//  CREATE
exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Por favor, preencha todos os campos.')
        }
    }

    let { avatar_url, name, birth, level_education, undergraduate, type_class, services } = req.body

    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()
    birth = Date.parse(req.body.birth)
    
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        level_education,
        undergraduate,
        type_class,
        services,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha ao escrever o arquivo.')

        return res.redirect('/teachers/create')
    })
}

//  SHOW
exports.show = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        level_education: graduation(foundTeacher.level_education),
        birth: date(foundTeacher.birth),
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    
    return res.render('teachers/show', { teacher })
}

//  EDIT
exports.edit = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,        
        age: age(foundTeacher.birth),
        level_education: graduation(foundTeacher.level_education),
        services: foundTeacher.services.split(','),
        birth: date(foundTeacher.birth),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    
    return res.render('teachers/edit', { teacher })
}