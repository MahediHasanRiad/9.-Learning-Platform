const LocalFilePath = (req, fileName = '', required = false) => {

  const LocalfilePath = req.files?.[fileName]?.[0]?.path;

  if (!LocalfilePath && required === true)
    throw new apiError(400, `${fileName} not found !!!`);

  return LocalfilePath;
  
};

export { LocalFilePath };
