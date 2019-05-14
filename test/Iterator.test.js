const expect = require("chai").expect;
const Iterator = require(`../test/Iterator`)


describe('test Iterator module', () => {
    let value = 0;
    const iterator = new Iterator(value);
    it('get current === 0', () => {
        const current = iterator.current();
        expect(current).to.be.equal(0)
    });
    it('return next() -> получаем current === 1', () => {
        let next = iterator.next();
        expect(next).to.be.equal(1)
    });
    it('return next() -> получаем current === 1', () => {
        let next = iterator.next();
        expect(next).to.be.equal(1)
    })
    it('return next() -> получаем current === 2', () => {
        let next = iterator.next();
        expect(next).to.be.equal(2)
    })
    it('return next() -> получаем current === 3', () => {
        let next = iterator.next();
        expect(next).to.be.equal(3)
    })
    it('return next() -> получаем current === 5', () => {
        let next = iterator.next();
        expect(next).to.be.equal(5)
    })
    it('return next() -> получаем current === 8', () => {
        let next = iterator.next();
        expect(next).to.be.equal(8)
    })
    it('return key() -> получаем current === 6 ', () => {
        let key = iterator.key();
        expect(key).to.be.equal(6)
    })
    it('return rewind()  -> получаем current === 0 ', () => {
        let rewind = iterator.rewind();
        expect(rewind).to.be.equal(0)
    })
    
})