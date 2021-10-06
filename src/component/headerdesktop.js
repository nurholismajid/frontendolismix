import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Scrollchor from 'react-scrollchor';

class HeaderDesktop extends Component  {

  constructor(props) {
    super(props);
    
  }


  render(){  
    
      Aos.init({duration:2000});

     // console.log(this.props.identity);

    return(
      <div>
        <title>{this.props.identity.title_website} | {this.props.identity.tagline_website}</title>
        <nav data-aos="fade-in" className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container"><a className="navbar-brand logo animated infinite flash slower" href="#"><img className="logo-img" src={this.props.identity.logo_website}/></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" data-aos="fade-up" role="presentation"><Scrollchor className="nav-link active"  to="#beranda"><i className="fas fa-home"></i> Beranda</Scrollchor></li>
                    <li className="nav-item" data-aos="fade-down" role="presentation"><Scrollchor className="nav-link"  to="#profil"><i className="fas fa-user"></i> Profil</Scrollchor></li>
                    <li className="nav-item" data-aos="fade-up" role="presentation"><Scrollchor className="nav-link"  to="#keahlian"><i className="fas fa-chalkboard-teacher"></i> Keahlian</Scrollchor></li>
                    <li className="nav-item" data-aos="fade-down" role="presentation"><Scrollchor className="nav-link"  to="#youtube"><i className="fab fa-youtube"></i> Channel Youtube</Scrollchor></li>
                    <li className="nav-item" data-aos="fade-up" role="presentation"><Scrollchor className="nav-link"  to="#portofolio"><i className="fas fa-tasks"></i> Portofolio</Scrollchor></li>
                    <li className="nav-item" data-aos="fade-down" role="presentation"><a className="nav-link" data-toggle="modal" data-target="#hubungisaya" href="#"><i className="fas fa-address-book"></i> Hubungi Saya</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    identity : state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(HeaderDesktop);