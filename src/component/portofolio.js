import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Galeriproject from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import parse from "html-react-parser";
class Portofolio extends Component  {

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
        var itemslide = 1;
      }
      else if ( windowWidth > 768){
        var itemslide = 1;
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

      console.log(this.props.portofolio)

     const loopdataslider = this.props.portofolio.map(portofolio=>{

   
        return(
        <div key={portofolio.id}>
          <div className="row align-items-center">
              <div className="col-md-12 col-lg-5 offset-lg-1 text">
              <h3>{portofolio.title.rendered}</h3>
              <p>{portofolio.acf.sort_description}</p>
                  <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={'#proj'+ portofolio.id}>
                  Selengkapnya
                  </button>
              </div>
              <div className="col-md-12 col-lg-5">
                  <div className="portfolio-laptop-mockup">
                      <div className="screen">
                          <div className="screen-content" style={{background:"url('"+portofolio.acf.cover+"')"}} ></div>
                      </div>
                      <div className="keyboard"></div>
                  </div>
              </div>
          </div>

      </div>                  
                  
          )
        })

        const loopmodal = this.props.portofolio.map(portofolio=>{

           console.log(portofolio.acf.gallery)
          const loopgaleri = portofolio.acf.gallery.map(galeri=>{

                                            return(

                                              <div key={galeri.id} className="col-6">
                                                <img src={galeri.image} className="img-project" alt="" />
                                              </div>
                                              
                                            )

                                          })

          
          return( 
                       <div key={portofolio.id} className="modal fade bd-example-modal-lg" id={'proj'+ portofolio.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{portofolio.title.rendered}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <nav>
                                  <div className="nav nav-tabs modaltab" id="nav-tab2" role="tablist">
                                    <a className="nav-item nav-link modaltab active" id="nav-profile-tab" data-toggle="tab" href="#description2" role="tab" aria-controls="nav-profile" aria-selected="false">Deskripsi</a>
                                    <a className="nav-item nav-link modaltab" id="nav-home-tab" data-toggle="tab" href="#tampilan2" role="tab" aria-controls="nav-home" aria-selected="true">Tampilan</a>
                                  </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                  <div className="tab-pane fade show active" id="description2" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="description-project">
                                        {parse(portofolio.acf.descriptions)}
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="tampilan2" role="tabpanel" aria-labelledby="nav-home-tab">
                                    
                                    <SRLWrapper>
                                    <div className="row galley-detail">
            
                                      {loopgaleri}
                                        
                                    </div>
                                    </SRLWrapper>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                              </div>
                            </div>
                          </div>
                        </div>   
            )
          })

    return(
      
      <div id="portofolio" className="portfolio-block website gradient">
            <div data-aos="fade-down" className="container">
                <div className="heading">
                    <h2>Portofolio</h2>
                </div>
                <div data-aos="fade-up" className="singleslide">
                <Slider  {...settings}>

                      {loopdataslider}
                    
                    </Slider>

                </div>
            </div>
            <Galeriproject>
            {loopmodal}
            </Galeriproject>
        </div>
   
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    portofolio:state.dataportofolio
  }
}

export default connect(mapStatetoprops)(Portofolio);