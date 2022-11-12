import { NextFunction, Request, Response } from "express";

import { getAuth } from "firebase-admin/auth";

export async function ensureAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const idToken = req.headers["authorization"] as string;

    const decodedToken = await getAuth().verifyIdToken(idToken);
    const nowTimestamp = parseInt((Date.now() / 1000).toString());

    if (nowTimestamp > decodedToken.exp) {
      return res.status(401).json("Your session has expired.");
    }

    return next();
  } catch (error) {
    return res.status(500).json("An internal error has ocurred.");
  }
}
