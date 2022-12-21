module.exports = {
  gender: (gender) => {
    if (gender === "male") {
      return (
        '<div class="form-check">' +
        '<input class="form-check-input" type="radio" name="gender" id="male"' +
        'value="male" checked />' +
        '<label class="form-check-label" for="gender1">' +
        "Male" +
        "</label>" +
        "</div>" +
        '<div class="form-check">' +
        '<input class="form-check-input" type="radio" name="gender"' +
        'value="female" id="female" />' +
        '<label class="form-check-label" for="gender2">' +
        "Female" +
        "</label>" +
        "</div>"
      );
    } else {
      return (
        '<div class="form-check">' +
        '<input class="form-check-input" type="radio" name="gender" id="male"' +
        'value="male"/>' +
        '<label class="form-check-label" for="gender1">' +
        "Male" +
        "</label>" +
        "</div>" +
        '<div class="form-check">' +
        '<input class="form-check-input" type="radio" name="gender"' +
        'value="female" id="female" checked />' +
        '<label class="form-check-label" for="gender2">' +
        "Female" +
        "</label>" +
        "</div>"
      );
    }
  },
  eq: (str1, str2) => {
    return str1 === str2;
  },
};
