module.exports = {
    age: function age(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
            age = age - 1
        }
        
        return age
    },
    
    date: function(timestamp){
        const date = new Date(timestamp)
        
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${day}-${month}-${year}`
    },
    
    graduation: function graduation(level) {
        switch (level) {
            case 'high_school':
                return 'Ensino Médio Completo'
            case 'undergraduate':
                return 'Ensino Superior Completo'
            case 'masters_degree':
                return 'Mestrado'
            case 'phd':
                return 'Doutorado'
        }
    }
}