function createSuccessResult(data){
    return { status : "Success" , data}
}

function createErrorResult(error){
    return { status : "Error" , error}
}

function createResult(error , data){
    return error ? createErrorResult(error) : createSuccessResult(data);
}

module.exports = {
    createErrorResult,
    createResult,
    createSuccessResult,
}