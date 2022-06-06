const User = module.exports;

/* TODO */
// hash
// salt
// posts: ["my first post", "my second post"],
// topics: ["js", "python"],
// bio
// createdAt
// modifiedAt

User.create = function (username, password) {
  if (!_isUsernameValid(username)) {
    console.error("Username is invalid");
    return;
  }

  return {
    username: username,
    password: password,
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
  };
};

function _isUsernameValid(username) {
  if (typeof username !== "string") {
    console.log("first");
    return false;
  }

  username = username.toLowerCase();

  if (!/^[a-z0-9_\.]+$/.exec(username)) {
    console.log("second");
    return false;
  }

  return true;
}
