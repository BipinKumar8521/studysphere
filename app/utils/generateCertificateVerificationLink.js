const { v4: uuidv4 } = require("uuid");

export default async function generateCertificateVerificationLink() {
  const uuid = uuidv4();
  return `${process.env.NEXT_PUBLIC_API_URL}/${uuid}`;
}
