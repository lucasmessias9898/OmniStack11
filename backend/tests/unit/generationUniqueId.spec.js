const generateUniqueId = require('../../src/utils/generateUniqueId');

decribe('Generate Unique ID', () => {
    it('Should generate an unique ID', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLenght(8);
    });
});