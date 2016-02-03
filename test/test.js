"use strict";
var chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    request = require('superagent'),
    local = supertest('http://localhost:8080'),
    osm = supertest('http://nominatim.openstreetmap.org'),
    myApp = require('../app/app.js'),
    latlong = require('../app/latlong');

chai.use(chaiAsPromised);
var baseUrl = '/';

describe('Testing routes', function () {
    //myApp.start();

        it('should return a 200 response', function (done) {
            local.get(baseUrl)
            .set('Accept', 'application/json')
            .expect(200,done);
            //myApp.stop();
        });

});

describe('LatLong',function(){
//myApp.start();
    it('should eventually return a new object with lat-long added', function(done){
        latlong.getLatLong('uppsala').should.eventually.notify(200);
        done();
        //myApp.stop();

    });
});

