const sha1 = require('sha1');
const async = require('async');
const request = require('request');
const models = require('../models');

module.exports = {
  dives: {
    get: (req, res) => {
      models.dive_sites.get((err, data) => {
        if (err) {
          res.send(404);
        } else {
          res.send(data);
        }
      });
    },
    post: (req, res) => {
      models.dive_sites.post(req.body)
        .then((result) => {
          res.sendStatus(201);
          res.send(result);
        });
    },
  },

  users: {
    post: (req, res) => {
      models.users.get(req.body, (err, data) => {
        if (err) {
          console.log('Error: ', err.message);
        } else if (data.length > 0) {
          if (sha1(req.body.pass + data[0].salt) === data[0].password) {
            const userInfo = {
              name: data[0].name,
              id: data[0].id,
              skill: data[0].skill,
            };
            res.send(userInfo);
          } else {
            res.send('Wrong Password');
          }
        } else {
          res.send('User does Not exist');
        }
      });
    },
  },

  comments: {
    get: (req, res) => {
      models.comments.get(req)
        .then((response) => {
          res.json(response);
        });
    },
    post: (req, res) => {
      models.comments.post(req.body, (err, data) => {
        if (err) {
          res.sendStatus(404);
        } else {
          const newComment = {
            name: req.body.name,
            date_1: req.body.date1,
            message: req.body.message,
            skill: req.body.skill,
          };
          res.send(newComment);
        }
      });
    },
  },

  new_sites: {
    post: (req, res) => {
      models.dive_sites.post(req.body, (err, data) => {
        if (err) {
          console.log('err', err);
          res.sendStatus(404);
        } else {
          res.json(data);
        }
      });
    },
  },

  new_users: {
    post: (req, res) => {
      const fuel = Math.random() * 2343453479543;
      const newUser = {
        name: req.body.user,
        salt: fuel,
        password: sha1(req.body.pass + fuel),
        age: req.body.age,
        email: req.body.email,
        skill: req.body.skill,
      };
      models.users.post(newUser, (err, data) => {
        if (err) {
          res.send('could not save user');
        } else {
          const userInfo = {
            name: req.body.user,
            id: data.insertId,
            skill: req.body.skill,
          };
          res.send(userInfo);
        }
      });
    },
  },

  weather: {
    get: ({ body }, res) => {
      console.log('specific weather!!!!!!!!!!!!!');
      const coordinates = `${body.location.lat},${body.location.lng}`;
      models.weather.get(coordinates, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
    },
    home: (req, res) => {
      // async.parallel([
      //   (callback) => {
      //     models.weather.northernWeather((err, data) => {
      //       callback(null, data);
      //     });
      //   },
      //   (callback) => {
      //     models.weather.centralWeather((err, data) => {
      //       callback(null, data);
      //     });
      //   },
      //   (callback) => {
      //     models.weather.southernWeather((err, data) => {
      //       callback(null, data);
      //     });
      //   },
      // ], (err, results) => {
      //   if (!err) {
      //     res.send(results);
      //   } else {
      //     res.send(err, 'fuck');
      //   }
      // });
    },
  },

  ocean: {
    get: (req, res) => {
      models.ocean.get(req, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    },
  },
};
