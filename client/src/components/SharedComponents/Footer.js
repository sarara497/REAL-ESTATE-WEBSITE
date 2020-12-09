import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../../../src/photo/logo.png'

const FooterPage = () => {
  return (

    <MDBFooter color="blue" className="font-small pt-4 mt-4">

      <MDBContainer fluid className="text-center text-md-left">

        <MDBRow>

          <MDBCol md="6">

            <img className="fot" id="logo" src={logo} />


            <h5 className="title"></h5>
           
          </MDBCol><br/><br/>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  SaRa Al-Ayed
        </MDBContainer>
      </div>
    </MDBFooter>

  );
}

export default FooterPage;