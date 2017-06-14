// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

function buildCustomers(customerData) {
  var customersGroup = document.getElementsByClassName('customers');
  $('body').prepend("<h2>INTERNAL COMPANY DIRECTORY</h2>");
  for (var i = 0; i < customerData.length; i++) {
    var customerCard = document.createElement('div');
    customerCard.setAttribute('class', 'customer-card');
    $(customersGroup).append(customerCard);
    $(customerCard).append($("<img>",{id: "picture", src:customerData[i].picture.large}));
    $(customerCard).append("<p id='name'>" + customerData[i].name.first + " " + customerData[i].name.last + "</p>");
    $(customerCard).append("<p id='email'>" + customerData[i].email + "</p>");
    $(customerCard).append("<p id='street'>" + customerData[i].location.street + "</p>");
    $(customerCard).append("<p id='city'>" + customerData[i].location.city + " " + customerData[i].location.state + " " + customerData[i].location.postcode + "</p>");
    $(customerCard).append("<p id='cell'>" + customerData[i].cell + "</p>");
    $(customerCard).append("<p id='social'>" + customerData[i].id.value + "</p>");
  }
}

(function () {

  'use strict';

  // Your Code Goes Here
  $.ajax({
    url: 'https://randomuser.me/api/?nat=us&results=12',
    dataType: 'json',
    success: function(data) {

      buildCustomers(data.results);

    }
  });

})();
