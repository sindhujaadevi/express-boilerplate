'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurantModel = require('./restEntity').restaurantModel;

router.post('/add', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
		let restaurant = restaurantModel(req.body);
    restaurant.save(function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'Restaurant saved successfully'});
    }
    });
  }
})

router.delete('/delete', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
		restaurantModel.remove({_id:req.body._id}, function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'Restaurant deleted successfully'});
    }
    });
  }
})

router.put('/update', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
		restaurantModel.update({_id:req.body._id}, {$set:{location:req.body.location}}, function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'Restaurant updated successfully'});
    }
    });
  }
})
router.post('/display', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
	restaurantModel.find(
			{$or:[{_id:req.body._id}]}, function(err,result){
    if(err){
      res.send(err);
    }
    else{
       res.send(result);
    }
    });
  }
})
router.get('/displayAll', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
	restaurantModel.find(function(err,result){
    if(err){
      res.send(err);
    }
    else{
       res.send(result);
    }
    });
  }
})
router.get('/', function(req, res) {

  res.send('response from restaurant GET route check');
});

module.exports = router;
