const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { age, date, graduation,nameSurname  } = require('../utils')

//  INDEX
exports.index = function(req, res){    
    let teachers = data.teachers.map(function(teacher){
        const teacherSplit = {
            ...teacher,
            name: nameSurname(teacher.name),
            services: teacher.services.split(',')
        }
        return teacherSplit
    })
    return res.render('teachers/index', { teachers })
}

//  CREATE PAGE
exports.create = function(req, res){
    return res.render('teachers/create')
}

//  CREATE DATA
exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Por favor, preencha todos os campos.')
        }
    }

    let { avatar_url, name, birth, education_level, undergraduate, type_class, services } = req.body

    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()
    birth = Date.parse(req.body.birth)
    
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education_level,
        undergraduate,
        type_class,
        services,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha ao escrever o arquivo!')

        return res.redirect('/teachers/create')
    })
}

//  SHOW
exports.show = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return id == teacher.id
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).dateShow,
        age: age(foundTeacher.birth),
        education_level: graduation(foundTeacher.education_level),
        services: foundTeacher.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    
    return res.render('teachers/show', { teacher })
}

//  EDIT PAGE
exports.edit = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return id == teacher.id
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    
    return res.render('teachers/edit', { teacher })
}

// EDIT DATA
exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex){
        if (id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) return res.send('Professor não encontrado!')

    const teacher = {
        ...foundTeacher,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teacher

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha ao escrever o arquivo!')
    })

    return res.redirect(`/teachers/${id}`)
}

// DELETE
exports.delete = function(req, res){
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Falha ao escrever o arquivo!')
    
        return res.redirect('/teachers')
    })
}