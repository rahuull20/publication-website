import React ,{useMemo} from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea,
    MDBFile
  }
  from 'mdb-react-ui-kit';
 const Published=()=>{
    const selectData = useMemo(() => [
        { text: 'One', value: 1, defaultSelected: true },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
        { text: 'Five', value: 5 },
        { text: 'Six', value: 6 },
        { text: 'Seven', value: 7 },
        { text: 'Eight', value: 8 },
      ], []);
    return(
        <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>

          

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-7'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Select Publication</h6>
                </MDBCol>
               
   <MDBCol md='6' classname='ps-5'>
   <form>
       <select placeholder="Choose">
           <option value="1">Journal</option>
           <option value="2">conference</option>
           <option value="3">Book Chapter</option>
           <option value="4">Text/Reference Book</option>
           <option value="5">Patent</option>
       </select>
</form>
</MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-7'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Faculty Author 1</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput  size='lg' id='form2' type='text'/>
                </MDBCol>
               
              </MDBRow>
              <MDBRow className='align-items-center pt-4 pb-7'>
              <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Faculty Author 2</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput  size='lg' id='form2' type='text'/>
                </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center pt-4 pb-7'>
              <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Faculty Author 3</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput  size='lg' id='form2' type='text'/>
                </MDBCol>
                </MDBRow>
              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-7'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Message</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea label='Message' id='textAreaExample' rows={3} />
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-7'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Upload CV</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' />
                  <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className='my-4' size='lg'>send application</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

    );
 }
 export default Published;
