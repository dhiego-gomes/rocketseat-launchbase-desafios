module.exports = {
    age: function age(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 ||
            month == 0 &&
            today.getDate() <= birthDate.getDate()){
                age = age - 1
            }
        
        return age
    },
    
    date: function(timestamp){
        const date = new Date(timestamp)
        
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
          iso:`${year}-${month}-${day}`,
          birthDay:`${day}/${month}`,
          dateShow:`${day}/${month}/${year}`
        }
    },
    
    graduation: function(level){
        switch (level) {
            case 'high_school': return 'Ensino Médio Completo'
            case 'undergraduate': return 'Ensino Superior Completo'
            case 'masters_degree': return 'Mestrado'
            case 'phd': return 'Doutorado'
        }
    },
    
    grade: function(year){
        switch (year) {
            case '5EF': return '5º Ano - Ensino Fundamental II'
            case '6EF': return '6º Ano - Ensino Fundamental II'
            case '7EF': return '7º Ano - Ensino Fundamental II'
            case '8EF': return '8º Ano - Ensino Fundamental II'
            case '9EF': return '9º Ano - Ensino Fundamental II'
            case '1EM': return '1º Ano - Ensino Médio'
            case '2EM': return '2º Ano - Ensino Médio'
            case '3EM': return '3º Ano - Ensino Médio'
        }
    },

    nameSurname: function(names){
        const name = names.split(' ')[0]
        const length = names.split(' ').length
        const surname = names.split(' ')[length - 1]
        
        return `${name} ${surname}`
    }
}