const chaihttp = require('chai-http')

const chai= require('chai')
const expect = chai.expect

chai.use(chaihttp);

describe( 'API Test Demo', () => {

    it('Get All Customers - API Test', ()=>{

        chai.request('http://localhost:3000/customers/102')
                .get('/')
                .end( (err,res) =>{

                    expect(res).not.to.be.null;
                    expect(res).to.have.status(200)
                    expect(res.body.customername).to.equal('Oracle corporation')
                    
                })

    })

    it('Post Customer - API Test', ()=>{

        let customer = {
        "id": 601,
        "customername": "Ford corporation",
        "emailid": "contactus@fordcorp.com"
    };

      
        chai.request('http://localhost:3000/customers')
                .post('/')
                .send(customer)
                .end( (err,res) =>{

                    expect(res).not.to.be.null;
                    expect(res).to.have.status(201)
                    expect(res.body.customername).to.equal('Ford corporation')
                    
                })

    })
})