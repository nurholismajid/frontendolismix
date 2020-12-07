import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Scrollchor from 'react-scrollchor';
class HeaderMobile extends Component  {

  constructor(props) {
    super(props);
  
  }


  render(){  
    Aos.init({duration:2000});
    return(
      <nav data-aos="fade-in"  className="navbar navbar-dark mobile navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div className="container">
          <div className="row">
                  <div className="col-2" data-aos="fade-up"  role="presentation"><Scrollchor  to="#beranda"><i className="fas fa-home"></i></Scrollchor></div>
                  <div className="col-2" data-aos="fade-down" role="presentation"><Scrollchor to="#profil"><i className="fas fa-user"></i></Scrollchor></div>
                  <div className="col-2" data-aos="fade-up" role="presentation"><Scrollchor to="#keahlian"><i className="fas fa-chalkboard-teacher"></i></Scrollchor></div>
                  <div className="col-2" data-aos="fade-down" role="presentation"><Scrollchor to="#youtube"><i className="fab fa-youtube"></i></Scrollchor></div>
                  <div className="col-2" data-aos="fade-up" role="presentation"><Scrollchor to="#portofolio"><i className="fas fa-tasks"></i></Scrollchor></div>
                  <div className="col-2" data-aos="fade-down" role="presentation"><a  data-toggle="modal" data-target="#hubungisaya" href="#"><i className="fas fa-address-book"></i></a></div>
          </div>
      </div>
  </nav>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    identity : state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(HeaderMobile);