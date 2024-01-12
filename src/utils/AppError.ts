class AppError {
    public readonly message: String;
    public readonly statusCode: number;

    constructor(message:String, statusCode:number = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default AppError;