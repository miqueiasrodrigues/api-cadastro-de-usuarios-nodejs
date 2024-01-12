import { NextFunction, Request, Response } from "express";
import { CelebrateError } from "celebrate";
import fs from "fs";

const isValidationError = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> => {
  if (error instanceof CelebrateError) {
    if (request.file) {
      await fs.promises.unlink(request.file.path);
    }

    return response.status(400).json({
      status: "error",
      message: error.details.get("body")?.details[0].message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export default isValidationError;
