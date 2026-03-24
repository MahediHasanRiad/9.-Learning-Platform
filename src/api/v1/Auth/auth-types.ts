export type optionsType = {
    httpOnly: boolean,
    secure: boolean,
    sameSite: "lax" | "strict" | "none" | undefined,
    path?: string,
  };