const expect = require("chai").expect;
const Iterator = require('../index')

let value = 0;
const iterator = new Iterator(value);
describe('My first test', () => {
    it('получаем current === 0', () => {
        let current = iterator.current();
        expect(current).to.be.equal(0)
    });
    it('вызываем next() -> получаем current === 1', () => {
        let next = iterator.next();
        expect(next).to.be.equal(1)
    });
    it('вызываем next() -> получаем current === 1', () => {
        let next = iterator.next();
        expect(next).to.be.equal(1)
    })
    it('вызываем next() -> получаем current === 2', () => {
        let next = iterator.next();
        expect(next).to.be.equal(2)
    })
    it('вызываем next() -> получаем current === 3', () => {
        let next = iterator.next();
        expect(next).to.be.equal(3)
    })
    it('вызываем next() -> получаем current === 5', () => {
        let next = iterator.next();
        expect(next).to.be.equal(5)
    })
    it('вызываем next() -> получаем current === 8', () => {
        let next = iterator.next();
        expect(next).to.be.equal(8)
    })
    it('вызываем key() -> получаем current === 6 ', () => {
        let key = iterator.key();
        expect(key).to.be.equal(6)
    })
    it('вызываем rewind()  -> получаем current === 0 ', () => {
        let rewind = iterator.rewind();
        expect(rewind).to.be.equal(0)
    })
    
})