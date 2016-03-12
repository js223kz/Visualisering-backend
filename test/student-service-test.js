"use strict";
const chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = require('chai').expect,
    studentService = require('../src/services/student-service'),
    settings = require('../settings');


chai.use(chaiAsPromised);

describe('student-service', () =>{
    it('should return student object with default city from settings file', (done) =>{
        studentService.find_by_username("")
        .then((student) =>{
             console.log(student);
             try {
                expect(student).to.be.an('object');
                expect(student).to.have.property('city');
                expect(student.city).to.equal(settings.defaultCity);
                done();
             } catch(x){
                 done(x);
             }
        });
    });
    
       it('should return student object with city', (done) =>{
        console.log('Ensure that this test returns an existing student based on username');
       studentService.find_by_username(settings.testUsername)
         .then((student) =>{
             console.log(student);
             try { 
                expect(student).to.be.an('object');
                expect(student).to.have.property('city');
                expect(student.city).to.equal('Falsterbo');
                done();
            } catch (x) {
                done(x);
            }
        
        });
    });
});

