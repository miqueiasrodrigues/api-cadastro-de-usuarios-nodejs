import User from "src/models/entities/User";

interface ISessionRequest{
    cpf: string;
    passwordHash: string;
}

interface ISessionResponse{
    user: User;
    token: string;
}

export {ISessionRequest, ISessionResponse}
