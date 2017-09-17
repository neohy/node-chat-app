const expect = require('expect');
// const request = require('supertest');

const {generateMessage} = require('./message');

describe("generateMessage", () => {
    it("should generate the correct message object", () => {
        var from = 'Andrew';
        var text = "Some message";
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    })
})
