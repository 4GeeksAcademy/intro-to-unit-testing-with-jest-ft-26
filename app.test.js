const {sumar, restar} = require('./app')

describe('Validaciones de la funcion sumar', () => {
    test('La funcion sumar debe estar definida', () => {
        expect(sumar()).toBeDefined()
    })
    
    test('La funcion sumar debe recibir 2 argumentos', () => {
        expect(sumar.length).toBe(2)
    })
    
    test('La sumar de 5 + 7 debe recibir 12', () => {
        expect(sumar(5, 7)).toBe(12)
    })
    
    test('La sumar de 6 + 10 debe recibir 16', () => {
        expect(sumar(6, 10)).toBe(16)
    })
})

describe('Validaciones de la funcion restar', () => {
    test('La funcion restar debe estar definida', () => {
        expect(restar()).toBeDefined()
    })
    
    test('La funcion restar debe recibir 2 argumentos', () => {
        expect(restar.length).toBe(2)
    })
    
    test('La sumar de 5 - 7 debe recibir -2', () => {
        expect(restar(5, 7)).toBe(-2)
    })
    
    test('La sumar de 60 - 10 debe recibir 50', () => {
        expect(restar(60, 10)).toBe(50)
    })
})

