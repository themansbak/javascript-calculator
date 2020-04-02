class InvalidInputError extends Error {
    constructor(message = 'Invalidn input', ...params) {
        super(...params);
        this.name = 'InvalidInputError'
    }
}


module.exports = {
    InvalidInputError
}