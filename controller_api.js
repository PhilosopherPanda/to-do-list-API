const User = require('./api');
const List = require('./api_list');

exports.create = function(req, res){
    const new_user = new User(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "fill all the required field"});
    }
    else{
        User.create(new_user, function(err, user){
            if(err) res.send(err);
            res.json({error: false, message:"Add successfully!", data:user});
        });
    }
};

exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err) res.send(err);
      res.json(user);
    });
};

exports.findAll = function(req, res) {
    User.findAll(function(err, user){
        console.log('controller');
        if(err){
            res.send(err);
        }
        console.log('res', user);
        res.send(user);
    });
};

exports.update = function (req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "fill all the required field"});
    }
    else{
        User.update(req.params.id, new User(req.body), function(err, user){
            if (err) res.send(err);
            res.json({error:false, message: "successfully updated!"});
        });
    }
};

exports.delete = function(req, res){
    User.delete(req.params.id, function(err, user){
        if(err) res.send(err);
        res.json({error: false, message: "successfully deleted!"});
    });
};

exports.create_list = function(req, res){
    const new_list = new List(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "fill all the required field"});
    }
    else{
        List.create_list(new_list, function(err, list){
            if(err) res.send(err);
            res.json({error: false, message:"Add successfully!", data:list});
        });
    }
};

exports.findById_list = function(req, res) {
    List.findById_list(req.params.id, function(err, list) {
      if (err) res.send(err);
      res.json(list);
    });
};

exports.getAll = function(req, res) {
    List.getAll(function(err, list){
        console.log('controller');
        if(err){
            res.send(err);
        }
        console.log('res', list);
        res.send(list);
    });
};

exports.updateByID = function (req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "fill all the required field"});
    }
    else{
        List.updateByID(req.params.id, new List(req.body), function(err, list){
            if (err) res.send(err);
            res.json({error:false, message: "successfully updated!"});
        });
    }
};

exports.delete_list = function(req, res){
    List.delete_list(req.params.id, function(err, list){
        if(err) res.send(err);
        res.json({error: false, message: "successfully deleted!"});
    });
};
