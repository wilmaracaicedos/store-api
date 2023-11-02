const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123.202';
  const hash = '$2b$10$WjfC42Igx6/kmEaPbXvBEez3tSmr9DGALWa/3rr7rEDmpWnac6aC.';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
