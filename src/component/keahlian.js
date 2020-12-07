import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
class Keahlian extends Component  {

  constructor(props) {
    super(props);

    this.state = { windowWidth: window.innerWidth };

  }
   handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
    

  render(){  
    
      Aos.init({duration:2000});
      const { windowWidth } = this.state; 

      if(windowWidth > 992){
        var itemslide = 3;
      }
      else if ( windowWidth > 768){
        var itemslide = 2;
      }else if ( windowWidth > 300){
        var itemslide = 1;
      }
  
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: itemslide,
        slidesToScroll: itemslide
      };

      const loopdataslider = this.props.keahlian.map(keeahlian=>{

        return(
                                
                    <div key={keeahlian.id}>
                        <div className="card special-skill-item border-0">
                        <div className="card-header bg-transparent border-0"><i className="icon ion-ios-lightbulb-outline"></i></div>
                            <div className="card-header bg-transparent border-0"><h3 className="card-title">{keeahlian.Title}</h3></div>
                            <div className="card-body">
                            <p className="card-text">{keeahlian.Descriptions}</p>
                            <p className="card-text"><b>Spesifikasi :</b></p>
                                <p className="card-text">
                                  {
                                   keeahlian.Spesifikasi.map(spesifikasi=>{
                                      return(
                                        <span key={spesifikasi.id}>{spesifikasi.TitleSpesifikasi}, </span>
                                      )
                                   })
                                  }  
                                  </p>
                                
                            </div>
                        </div>
                    </div>
          )
        })

    return(
      
      <div id="keahlian" className="portfolio-block website gradient">
            <div data-aos="fade-down" className="container">
                <div className="heading">
                    <h2>Bidang & Keahlian</h2>
                </div>
                <Slider data-aos="fade-up"  {...settings}>
                   {loopdataslider }
                </Slider> 
            </div>
        </div>
   
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    keahlian:state.datakeahlian
  }
}

export default connect(mapStatetoprops)(Keahlian);