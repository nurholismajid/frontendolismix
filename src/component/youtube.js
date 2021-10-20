import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
class Youtube extends Component  {

  constructor(props) {
    super(props);

    this.state = { windowWidth: window.innerWidth };

    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
    
  }
   handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };

   openModal (idyoutube) {
    this.setState({
      isOpen: true,
      idyoutube:idyoutube
    })
  }
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
    

  render(){  
    
      Aos.init({duration:2000});
      const { windowWidth } = this.state; 

      if(windowWidth > 992){
        var itemslide = 4;
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

      const loopdataslider = this.props.youtube.map(youtube=>{

        return(
                                <div key={youtube.id}>
                                  <div className="cardvideo">
                                      <div className="thumnail">
                                          <img src={youtube.acf.thumbnail} alt="" className="covervideo" />
                                          <button onClick={()=>this.openModal(youtube.acf.id_video)}  className="btnplay youtube-link">
                                              <center><i className="fas fa-play-circle"></i></center>
                                          </button>
                                      </div>
                                      <div className="contentvideo">
                                          <h3 className="titlevideo">{youtube.Title}</h3>
                                          <p className="descriptionvideo">
                                              <span><a href={youtube.acf.url_chanel}><i className="fab fa-youtube"></i> {youtube.acf.nama_chanel}</a></span><span><i className="fas fa-calendar-alt"></i> {youtube.date.substring(0,10)}</span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
          )
        })

        const loopdatarow = this.props.youtube.map(youtube=>{

            return(
                                    <div key={youtube.id} className="col-sm-6 col-md-6 col-lg-3 col-video">
                                      <div className="cardvideo">
                                          <div className="thumnail">
                                          <img src={youtube.acf.thumbnail} alt="" className="covervideo" />
                                          <button onClick={()=>this.openModal(youtube.acf.id_video)}  className="btnplay youtube-link">
                                              <center><i className="fas fa-play-circle"></i></center>
                                          </button>
                                          </div>
                                          <div className="contentvideo">
                                              <h3 className="titlevideo">{youtube.Title}</h3>
                                              <p className="descriptionvideo">
                                                  <span><a href={youtube.acf.url_chanel}><i className="fab fa-youtube"></i> {youtube.acf.nama_chanel}</a></span><span><i className="fas fa-calendar-alt"></i> {youtube.date.substring(0,10)}</span>
                                              </p>
                                          </div>
                                      </div>
                                  </div>
              )
            })

    return(
      
      <div id="youtube" className="portfolio-block website gradient">
      <div data-aos="fade-down" className="container">
          <div className="heading">
              <h2>Channel Youtube</h2>
          </div>
          <div data-aos="fade-up" className="row">
              <div className="col-12">
                  <ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId={this.state.idyoutube} onClose={() => this.setState({isOpen: false})} />
                  <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                          <a className="nav-link youtube active" href="#profile" role="tab" data-toggle="tab">Terbaru</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link youtube" href="#buzz" role="tab" data-toggle="tab">Semua</a>
                      </li>
                  </ul>

                  <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade show active" id="profile">
                      <Slider {...settings}>
                              
                             {loopdataslider} 

                          </Slider>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="buzz">
                          <div className="row video">

                              {loopdatarow}
                              

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    youtube:state.datayoutube,
  }
}

export default connect(mapStatetoprops)(Youtube);