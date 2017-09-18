const expect = require('expect');
// const request = require('supertest');

const {generateMessage, generateLocationMessage} = require('./message');

describe("generateMessage", () => {
    it("should generate the correct message object", () => {
        var from = 'Andrew';
        var text = "Some message";
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "user"
    var longitude = 1;
    var latitude = 1;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  })
})
