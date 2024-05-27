const { v4: uuidv4 } = require("uuid");

export default async function generateCertificateVerificationLink() {
  const uuid = uuidv4();
  return `http://localhost:3000/verify/${uuid}`;
}
