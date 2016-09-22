module.exports = {
    getUsers(req, res) {
        return res.status(200).json(users);
    },
    getName: function(req, res) {
      const results = users.filter(user => user.name >= parseInt(req.query.name));
      res.status(200).json(results);
    },
    getLocation: function(req, res) {
        const results = users.filter(user => user.location >= parseInt(req.query.location));
        res.status(200).json(results);
    },
    getOccupation: function(req, res) {
        const results = users.filter(user => user.occupation >= parseInt(req.query.occupation));
        res.status(200).json(results);
    },
    getCurrentJob: function(req, res) {
        const results = users.filter(user => user.latest >= parseInt(req.query.latest));
        res.status(200).json(results);
    },
    getHobbies: function(req, res) {
        const result = user.filter(user => user.hobbies >= parseInt(req.query.hobbies));
        res.status(200).json(results);
    },
    getTypeOfHobby(req, res) {
      const result = user.filter(user => user.typeOfHobby >= parseInt(req.query.typeOfHobby));
      res.status(200).json(results);
    },
    postName(req, res) {
      users.push(req.body);
      return res.status(203).json(users);
    }
};


const users = [
  {
    name: "billy",
    occupation: "blacksmith",
    location: "dallas, tx",
    latest: "paper boy",
    hobbies: [
      {
      name: "watching cartoons",
      type: "current"
    },
    {
      name: "quacking",
      type: "past"
    }
  ]
},
    {
      name: "george",
      occupation: "soldier",
      location: "austin, tx",
      latest: "entrepreneur",
      hobbies: [
        {
        name: "eating food",
        type: "current"
      },
      {
        name: "traveling",
        type: "past"
      }
    ]
      }
];
