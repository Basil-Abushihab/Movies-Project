class User {
  constructor(userID,firstName, lastName, email, image, bio,movies) {
    this.userID=userID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.image = image;
    this.bio = bio;
    this.movies=movies;
  }
}

export { User };
