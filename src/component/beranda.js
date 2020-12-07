import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Api from '../services/services';

class Beranda extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      videostate : ''
    }
     
  }

  componentDidMount() {
         if(sessionStorage.getItem('videostate') == "undefined" || !sessionStorage.getItem('videostate')){
          setTimeout(function() {
            window.location.reload(false);
          },2800)
        }
  }

  render(){  

      Aos.init({duration:2000});
      

    return(
      <div id="beranda" className="portfolio-block block-intro gradient">
      <video id="video_background" autoPlay  muted loop  className="backgroundvideo">
          <source type="video/mp4" src={sessionStorage.getItem('videostate')} />
        </video>
      <div className="container-header">
          <div data-aos="fade-down" className="avatar"><img src={this.props.beranda.profile}/></div>
          <div data-aos="fade-up" className="about-me">
              <p>{this.props.beranda.description}</p><a className="btn btn-outline-primary" role="button" data-toggle="modal"
                  data-target="#hubungisaya" href="#">{this.props.beranda.titlebutton}</a></div>
      </div>
  </div>
    
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    beranda:state.databerandawebsite
  }
}

export default connect(mapStatetoprops)(Beranda);