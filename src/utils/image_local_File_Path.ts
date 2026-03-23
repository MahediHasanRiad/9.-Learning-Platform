import type { Request } from "express";
import { apiError } from "./apiError.js";

const LocalFilePath = (req:Request, fileName: string = '', required: boolean = false): string | undefined => {

  const files = req.files as Record<string, Express.Multer.File[]>

  const LocalfilePath = files?.[fileName]?.[0]?.path;

  if (!LocalfilePath && required === true)
    throw new apiError(400, `${fileName} not found !!!`);

  return LocalfilePath;
  
};

export { LocalFilePath };
