const employees = [
    {   name: 'MARCOS SILVA', level: 'Júnior', hours: [36, 40, 33, 32], overtimes: [2, 1, 1, 2], value: [15]  },
    {   name: 'LIZIANE GATES', level: 'Pleno', hours: [32, 35, 31, 31], overtimes: [2], value: [35]  },
    {   name: 'THIAGO DECHAMPS', level: 'Sênior', hours: [33, 32, 30, 34], overtimes: [1], value: [50]  }
]

for (let employee of employees){
    const salary = calculateSalary(employee.hours, employee.value)
    const totalOvertimes = calculateOvertime(employee.overtimes, employee.value)
    console.log(`${employee.name}. Nível do cargo: ${employee.level}.
    Total de horas: ${sumHours(employee.hours)}. Salário base: R$${salary},00.
    Total de horas extras: ${sumHours(employee.overtimes)}. Valor das horas extras: R$${totalOvertimes},00.
    Salário total: R$${salary + totalOvertimes},00.`)
}

function calculateSalary(hours, value) {
    const totalHours = sumHours(hours)
    const totalValue = sumHours(value)
    
    return totalHours * totalValue
}

function calculateOvertime(overtimes, value) {
    const overtime = sumHours(overtimes)
    const totalValue = sumHours(value)

    return (overtime * totalValue) * 1.5    
}

function sumHours(hours){
    let sum = 0
    for (let hour of hours){
        sum = sum + hour
    }
    return sum
}