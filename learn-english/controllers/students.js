const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { date, grade, nameSurname } = require('../utils')

// INDEX
exports.index = function(req, res){
    let students = data.students.map(function(student){
        const studentTable = {
            ...student,
            name: nameSurname(student.name),
            school_year: grade(student.school_year)
        }
        return studentTable
    })

    return res.render('students/index', { students })
}

//  CREATE PAGE
exports.create = function(req, res){
    return res.render('students/create')
}

//  CREATE DATA
exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Por favor, preencha todos os campos.')
        }
    }

    let { avatar_url, name, birth, email, school_year, workload } = req.body

    const id = Number(data.students.length + 1)
    birth = Date.parse(req.body.birth)
    
    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        email,
        school_year,
        workload 
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha ao escrever o arquivo!')

        return res.redirect(`/students/${id}`)
    })
}

//  SHOW
exports.show = function(req, res){
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return id == student.id
    })

    if (!foundStudent) return res.send('Aluno não encontrado!')

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        school_year: grade(foundStudent.school_year),
    }
    
    return res.render('students/show', { student })
}

//  EDIT PAGE
exports.edit = function(req, res){
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return id == student.id
    })

    if (!foundStudent) return res.send('Aluno não encontrado!')

    const student = {
        ...foundStudent,        
        birth: date(foundStudent.birth).iso
    }
    
    return res.render('students/edit', { student })
}

// EDIT DATA
exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, foundIndex){
        if (id == student.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundStudent) return res.send('Aluno não encontrado!')

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.students[index] = student

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha ao escrever o arquivo!')
    })

    return res.redirect(`/students/${id}`)
}

// DELETE
exports.delete = function(req, res){
    const { id } = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Falha ao escrever o arquivo!')
    
        return res.redirect('/students')
    })
}