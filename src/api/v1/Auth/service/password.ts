import bcrypt from 'bcrypt'

export const HashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 10)
  return hash
}

export const ComparePassword = async (hashPass: string, password: string) => {
  console.log(hashPass, password)
  return await bcrypt.compare(password, hashPass)
}