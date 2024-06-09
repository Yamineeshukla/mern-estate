import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default:"https://www.google.com/imgres?q=dummy%20profile%20girl&imgurl=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F512x512%2F2016%2F07%2F26%2F802029_user_512x512.png&imgrefurl=https%3A%2F%2Fwww.shareicon.net%2Favatar-user-profile-social-woman-802029&docid=GemeJjzfdnXMZM&tbnid=kH5ZGZLaVXwPwM&vet=12ahUKEwjurffG-s2GAxWO9zgGHSFpAvIQM3oECBwQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjurffG-s2GAxWO9zgGHSFpAvIQM3oECBwQAA"
    },
   
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;