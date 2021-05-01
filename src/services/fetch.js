function sendData(data) {
  return fetch("https://awesome-profile-cards.herokuapp.com/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return {
        success: false,
        error: "Error, encendemos la batseñal, Batman al rescate!!",
      };
    });
}

export default sendData;
