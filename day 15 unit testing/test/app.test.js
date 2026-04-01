const {describe,it} = require('mocha');
const add = require('../app')

const {expect} = require('chai');

describe('testing maths operation',()=>{
    beforeEach(()=>{
        console.log('before-each');
    })
    it('normal-add',()=>{
        const result = add(2,3);
        expect(result).to.equal(5);
    })
    it('negative-number-add',()=>{
        const result1 = add(-2,-3);
        expect(result1).to.equal(-5);
    })
    it('decimal-number',()=>{
        const result2 = add(2.0,3.2);
        expect(result2).to.equal(5.2);
    })
})

 