// Note this object is purely in memory
// When node shuts down this will be cleared.
// Same when your heroku app shuts down from inactivity
// We will be working with databases in the next few weeks.
const users = {};

const respondJSON = (request, response, status, object) => {
  const content = JSON.stringify(object);

  response.writeHead(status, { 
    'Content-Type': 'application/json', 
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  if(request.method !== 'HEAD') {
    response.write(JSON.stringify(object));
  }

  response.end();
};

const getUsers = (request, response) => {
  const responseJSON = {
    users,
  };

  respondJSON(request, response, 200, responseJSON);
};

const addUser = (request, response) => {
  responseJSON = {
    message: "Name and age are both required."
  }
  const {name,age} = request.body;
  if(!name || !age){
    respondJSON.id = "Missing Params";
    return respondJSON(request,response,404,responseJSON);
  }

  if(!users[name]){
    statusCode = 201;
    users[name] = {
      name:name
    }
  }

  user[name].age.gage =age;

  console.log(name,age);
};

module.exports = {
  getUsers,
  addUser,
};
