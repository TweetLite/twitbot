
exports.config=[
  {
    type: "input",
    name: "username",
    message: "Username ?",
    validate: function( value ) {
     
      if (value !== "" && value) {
        return true;
      } else {
        return "Boş bırakmayın";
      }
    }
  },
  {
    type: "input",
    name: "Consumer_Key",
    message: "Consumer Key ?",
    validate: function( value ) {
     
      if (value !== "" && value) {
        return true;
      } else {
        return "Boş bırakmayın";
      }
    }
  },
  {
    type: "input",
    name: "Consumer_Secret",
    message: "Consumer Secret ?",
    validate: function( value ) {
     
      if (value !== "" && value) {
        return true;
      } else {
        return "Boş bırakmayın";
      }
    }
  },
  {
    type: "input",
    name: "Access_Token",
    message: "Access Token ?",
    validate: function( value ) {
     
      if (value !== "" && value) {
        return true;
      } else {
        return "Boş bırakmayın";
      }
    }
  },
  {
    type: "input",
    name: "Access_Token_Secret",
    message: "Access Token Secret ?",
    validate: function( value ) {
     
      if (value !== "" && value) {
        return true;
      } else {
        return "Boş bırakmayın";
      }
    }
  }
];



exports.start=[
  {
    type: "list",
    name: "select",
    message: "Choices your account"
  }
];
