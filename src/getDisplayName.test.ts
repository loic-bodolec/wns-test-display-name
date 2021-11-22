import getDisplayName from './getDisplayName'

describe('getDisplayName', ()=> {
    describe('when no specified city', () => {
        it('returns question mark and full name', ()=> {
            expect(getDisplayName('Jane', 'Doe')).toBe('[?] Jane Doe')
        })
    })
    describe('when specified city', () => {
        it('returns city and full name', ()=> {
            expect(getDisplayName('John', 'Doe', 'Paris')).toBe('[Paris] John Doe')
        })
    })
})