const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  resetToken: String,
  firstLogin: Date,
  lastLogin: Date,
});

userSchema.virtual('jwt').get(() => {
  console.log(this.id);
  console.log(this.email);
  console.log(this.githubUsername);
  const jwtToken = jwt.sign({
    id: this.id,
    email: this.email,
  }, process.env.JWT_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
  console.log(jwtToken);
  return jwtToken;
});

userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
