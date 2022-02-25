import React from 'react'
import { Button, OverlayTrigger, Popover, Table } from 'react-bootstrap'

function Applications({ applicantData }) {
    const popover =({descri}) => (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Description</Popover.Header>
        <Popover.Body>
          {descri}
    </Popover.Body>
  </Popover>
);

const Example = ({descri}) => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover({ descri })}>
    <Button variant="info">view</Button>
  </OverlayTrigger>
);
  return (
      <div>
          
          <p className='text-start fs-3' style={{fontSize:'20px'}}>Applicants</p>
          <Table striped bordered hover variant="dark" responsive>
  <thead>
    <tr>
      <th>Name</th>
      <th>Business Sector</th>
      <th>Required Assest</th>
      <th>Funding Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
        {applicantData && applicantData.map(applicant => (
            <tr key={applicant.applicant_name}>
                <td>{applicant.applicant_name}</td>
                <td>{applicant.business_sector}</td>
                <td>{applicant.required_asset}</td>
                <td>{applicant.funding_required}</td>
            <td><Example descri={applicant.description}/></td>
                
    </tr>
        
                            
                            
          ))}
        
  </tbody>
</Table>
      </div>
      
  )
}

export default Applications