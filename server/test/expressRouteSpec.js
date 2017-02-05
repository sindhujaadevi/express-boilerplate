const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../server");

var url = supertest("http://localhost:8080");

describe.only("Testing  POST route", function(err){
it("should be null", function(done){
 url
     .post("/adding")
     .send({id:null,name:null})
     .expect(200)
     .end(function(err,res){
       should.not.exist(err);
      res.text.should.equal("Enter some value");
       done();
     });
});
});
describe.only("Testing 2", function(err){
it("should have some value", function(done){
  url
      .post("/adding")
      .send({id:"",name:""})
      .expect(200)
      .end(function(err,res){
        should.not.exist(err);
        res.text.should.equal("Enter valid input");
        done();
      });
});
});
describe.only("Testing 3  ", function(err){
it("should have", function(done){
  url
      .post("/adding")
      .send({id:"25",name:"sri"})
      .expect(200)
      .end(function(err,res){
        should.not.exist(err);
        res.text.should.equal("done");
        done();
      });
});
});
describe.only("Delete  POST route", function(err){
it("should be null", function(done){
 url
     .post("/delete")
     .send({id:null,name:null})
     .expect(200)
     .end(function(err,res){
       should.not.exist(err);
      res.text.should.equal("Enter some value");
       done();
     });
});
});
describe.only("delete 2", function(err){
it("should have some value", function(done){
  url
      .post("/delete")
      .send({id:"",name:""})
      .expect(200)
      .end(function(err,res){
        should.not.exist(err);
        res.text.should.equal("Enter valid input");
        done();
      });
});
});
describe.only("delete 3  ", function(err){
it("should have", function(done){
  url
      .post("/delete")
      .send({id:"25",name:"sri"})
      .expect(200)
      .end(function(err,res){
        should.not.exist(err);
        res.text.should.equal("done");
        done();
      });
});
});
describe.only("sending null value", function(err){
 it("1", function(done){
   url
       .put("/update")
       .send()
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
          (res.text).should.equal('Enter valid id');
         done();
       });
         });
       });
  describe.only("sending null value", function(err){
 it("2", function(done){
   url
       .put("/update")
       .send({})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
          (res.text).should.equal('Enter valid id');
         done();
       });
         });
       });
       describe.only("sending info value", function(err){
         it("3", function(done){
                   url
                       .put("/update")
                       .send({id:""})
                       .expect(200)
                       .end(function(err,res){
                         should.not.exist(err);
                         (res.text).should.equal('Enter the correct id');
                         done();
                       });
                         });
});
describe.only("sending in value", function(err){
     it("4", function(done){
               url
                   .put("/update")
                   .send({id:"100"})
                   .expect(200)
                   .end(function(err,res){
                     should.not.exist(err);
                     (res.text).should.equal('Resturant updated');
                     done();
                   });
                     });

});
