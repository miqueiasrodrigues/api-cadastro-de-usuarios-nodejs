import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "src/utils/AppError";
import AuthConfig from "@config/auth";
import { ITokenPayLoad } from "src/interfaces/TokenInterface";

const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token JWT não encontrado.");
  }

  const [, token] = authHeader.split(" ");
  try {
    const decodedToken = verify(token, AuthConfig.jwt.secret);
    const { sub } = decodedToken as ITokenPayLoad;
    request.user = {
      id: parseInt(sub),
    };
    return next();
  } catch {
    throw new AppError("Token JWT inválido");
  }
};

export default isAuthenticated;
