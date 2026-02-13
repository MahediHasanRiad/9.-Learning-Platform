export class apiError extends Error {
    constructor(statusCode, message, errors, stack){
        this.statusCode = statusCode,
        this.message = message,
        this.errors = errors,
        this.stack = ' ',
        this.data = null,
        this.success = false

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}