/** Checks if data is empty. */

const isEmpty = string => {
    if (string.trim() === "") return true;
    else return false;
  };
  
  /** Checks if data is a valid email address. */
  
  const isEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  
  /** Validates Sign Up Data. */
  
  exports.validateSignupData = data => {
    let errors = {};
  
    if (isEmpty(data.email)) {
      errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
      errors.email = "Must be a valid email address";
    }
  
    if (isEmpty(data.password)) errors.password = "Must not be empty";
  
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passwords must match";
  
    if (isEmpty(data.username)) errors.username = "Must not be empty";

    if (isEmpty(data.firstName)) errors.firstName = "Must not be empty";

    if (isEmpty(data.lastName)) errors.lastName = "Must not be empty";
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };
  
  /** Validates Login Data. */

exports.validateLoginData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not be empty";
  if (isEmpty(data.password)) errors.password = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

/** Validates User Details. */

exports.reduceUserDetails = data => {
  let userDetails = {};

  if (!isEmpty(data.quote.trim())) userDetails.quote = data.quote;
  if (!isNaN(data.budget.trim())) userDetails.budget = parseInt(data.budget);

  return userDetails;
};
  
  
