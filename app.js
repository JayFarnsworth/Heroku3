const express = require('express');
const cors = require('cors');
var students = [{
  id: 1,
  firstName: "Alice",
  lastName: "Zephyr",
  homeTown: "Seattle"
}, {
  id: 2,
  firstName: "Bob",
  lastName: "Yellow",
  homeTown: "Vancouver"
}, {
  id: 3,
  firstName: "Claire",
  lastName: "Xylitol",
  homeTown: "Toledo"
}, {
  id: 4,
  firstName: "Daniel",
  lastName: "Winston",
  homeTown: "Akron"
}, {
  id: 5,
  firstName: "Edina",
  lastName: "Veritas",
  homeTown: "Wichita"
}];
app.get('/', function (request, response) {
  response.json({students});
});
app.get('/:id', function (request, response) {
  var idFound = idFind(students, request.params.id);
  if (!idFound){
    response.status = (404);
    response.json({
      error: {
        message: 'No record found!'
      }
    });
  }
  response.json({students; idFound});
});
app.listen(process.env.PORT || 3000);
