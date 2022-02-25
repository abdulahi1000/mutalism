import React, { useEffect, useState } from 'react'
import { Card, Col, Container,Row, Table } from 'react-bootstrap'
import Applications from '../components/Applications'
import axios from 'axios'

function HomeScreen() {

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  } 
  

  const [newData, setNewData] = useState([])

  useEffect(() => {
    async function fetchData() {

      const { data } = await axios.get('https://mutualism-test.herokuapp.com/investor/summary')
      setNewData(data)
     
    }
    fetchData()
    
    
  }, [])
  return (
    <>
      <Container className='py-3 p-1' fluid={true}>
           <Row className='d-flex justify-content-md-center ' style={{marginLeft:'50px'}}>  
      <Col className=' justify-content-md-center'>
        <Card
          // bg='dark'
                border='info'
          key={1}
          text='dark'
          style={{ width: '19rem'}}
          className="mb-2"
        >
   
              <Card.Body>
                <div  className='d-flex justify-content-center'>
                <i style={{ marginTop:'-15px', marginRight:'15px'}} className='fas fa-dollar-sign text-info'></i> 
                <Card.Title style={{ fontSize: '15px', marginTop:'-15px', marginBottom:'0px' }}>Total Amount Invested</Card.Title>
                
                  </div>
                  {/* <Card.Title style={{ fontSize: '15px', marginTop:'-15px', marginBottom:'0px' }}> Amount to Invest </Card.Title> */}
                  <hr></hr>
              <div style={{display:'flex', justifyContent:'center',marginTop:'-15px', marginBottom:'-10px' }}>
                    <Card.Text>
                      <h5>R {newData.amount_to_invest}</h5>
                    
                    </Card.Text>
                    </div>
          </Card.Body>
        </Card>
       
      </Col>
      <Col>
        <Card
          // bg='dark'
                border='success'
          key={1}
          text='dark'
          style={{ width: '19rem'}}
          className="mb-2"
        >
   
              <Card.Body>
                <div  className='d-flex justify-content-center'>
                <i style={{ marginTop:'-15px', marginRight:'15px'}} className='fas fa-donate text-success'></i>
                <Card.Title style={{ fontSize: '15px', marginTop:'-15px', marginBottom:'0px' }}>Total Amount Invested</Card.Title>
                
                  </div>
                  {/* <Card.Title style={{ fontSize: '15px', marginTop:'-15px', marginBottom:'0px' }}>Total Amount Invested </Card.Title> */}
                  <hr></hr>
              <div style={{display:'flex', justifyContent:'center',marginTop:'-15px', marginBottom:'-10px' }}>
                    <Card.Text>
                      <h5>R {newData.total_invested}</h5>
                    
                    </Card.Text>
                    </div>
          </Card.Body>
        </Card>
       
      </Col>
       <Col>
        <Card
          // bg='dark'
                border='danger'
          key={1}
          text='dark'
          style={{ width: '19rem' }}
          className="mb-2"
        >
   
            <Card.Body>
              <div  className='d-flex justify-content-center'>
                <i style={{ marginTop:'-15px', marginRight:'15px'}} className='fas fa-chart-line text-danger'></i>
                <Card.Title style={{ fontSize: '15px', marginTop:'-15px', marginBottom:'0px' }}>Number of Business Funded</Card.Title>
                
                  </div>
                  
                  <hr></hr>
              <div style={{display:'flex', justifyContent:'center',marginTop:'-15px', marginBottom:'-10px' }}>
                    <Card.Text>
                      <h5>{newData.number_of_businesses_invested_in}</h5>
                    
                    </Card.Text>
                    </div>
          </Card.Body>
        </Card>
       
      </Col>
        </Row>
          <div style={{display:'block'}}>
    <Row className='py-1 p-3' >
      <Col xl={8} sm={12}>
              <h5>Applications Summary</h5>
              <p>Below is a summary of our current applicants,<br>
              </br>
              browse through to find potential business to invest in.</p>
        <Applications applicantData= {newData.applications} />
      </Col>
      <Col xl={4} >
              <Card bg='dark'
                text='light'
              >
                <Card.Header>
                  Recent SMME Repayments
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover variant="dark" responsive>
                    <thead>
                      <tr>
                        <th>SMME</th>
                        <th>Date</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newData.recent_repayment && newData.recent_repayment.map(repay => (
                        <tr key={repay.date_paid}>
                          <td>{ repay.paying_user}</td>
                          <td> {formatDate( repay.date_paid )}</td>
                          <td> R { repay.amount_paid}</td>
                          </tr>
                       
                        ))}
    
                      </tbody>
                  </Table>

                </Card.Body>
           
         </Card>
      </Col>
      
      </Row>
      </div>

      </Container>
      
    
      
   
     
    
     
    </>
    
  )
}

export default HomeScreen