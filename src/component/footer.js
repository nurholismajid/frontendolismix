import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Scrollchor from 'react-scrollchor';
class Footer extends Component  {

  constructor(props) {
    super(props);
  
  }


  render(){  
    Aos.init({duration:2000});
    return(
        
      <footer data-aos="fade-in" className="page-footer">
      <div className="container">
          <div className="links">
              <Scrollchor   to="#beranda">Beranda</Scrollchor>
              <Scrollchor  to="#profil">Profil</Scrollchor>
              <Scrollchor  to="#keahlian">Keahlian</Scrollchor>
              <Scrollchor  to="#youtube">Channel Youtube</Scrollchor>
              <Scrollchor  to="#portofolio">Portofolio</Scrollchor>
              
              <a  data-toggle="modal" data-target="#hubungisaya" href="#">Hubungi Saya</a>
          </div>
          <div className="social-icons"><a href={this.props.identity.facebook}><i className="icon ion-social-facebook"></i></a><a href={this.props.identity.instagram}><i className="icon ion-social-instagram-outline"></i></a><a href={this.props.identity.youtube}><i className="icon ion-social-youtube"></i></a></div>
      </div>
  </footer>
   
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    identity : state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(Footer);