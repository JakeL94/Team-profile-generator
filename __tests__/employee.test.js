const Employee = require("../lib/employee");

test('creates a new employee object', () => {
    const employee = new Employee('Tammer', 27, 'Tammer@initech.com')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('creates employee name in HTML string', () => {
    const employee = new Employee('Tammer')

    expect(employee.getName()).toEqual(expect.any(String))
})

test('creates employee ID', () => {
    const employee = new Employee('Tammer', 27, 'Tammer@initech.com')

    expect(employee.getId()).toEqual(expect.any(Number))
})

test('creates employee email address in HTML string', () => {
    const employee = new Employee('Tammer', 27, 'Tammer@initech.com')
    
    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('returns "Employee"', () => {
    const employee = new Employee('Tammer', 27, 'Tammer@initech.com')
    
    expect(employee.getRole()).toBe("Employee");
})