import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Galerifoto from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

class Profil extends Component  {

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
      
      const loopgaleri = this.props.galeri.map(image=>{

        return(
          <div key={image.id}>
            <img className="img-profil" src={image.image} alt="" />
          </div>
          )
        })
        var nopend = 0;
        const looppendidikan = this.props.pendidikan.map(pendidikan=>{
          nopend++;
          return(
                            <div key={nopend} className="item">
                              <div className="row">
                                  <div className="col-md-6">
                                      <h3>{pendidikan.jenjang}</h3>
                                  </div>
                                  <div className="col-md-6"><span className="period">{pendidikan.tahun_masuk} - {pendidikan.tahun_lulus}</span></div>
                              </div>
                              <h4 className="organization">{pendidikan.nama_sekolah}</h4>
                              <p className="text-muted">{pendidikan.description}</p>
                            </div>
            )
          })
          var nopeK = 0;
          const looppekerjaan = this.props.pekerjaan.map(pekerjaan=>{
            nopeK++;
              if(pekerjaan.TahunKeluar == null){
                var keluar = "Sekarang";
              }else{
                var keluar = pekerjaan.TahunKeluar;
              }

            return(
              <div key={nopeK} className="item">
              <div className="row">
                  <div className="col-md-6">
                      <h3>{pekerjaan.profesi}</h3>
            <h4 className="organization">{pekerjaan.nama_perusahan}</h4>
                  </div>
                  <div className="col-md-6"><span className="period">{pekerjaan.tahun_masuk} - {keluar}</span></div>
              </div>
              <div className="text-muted">{pekerjaan.deskripsi}</div>
          </div>

              )
            })
        

    return(
      
      <div id="profil" className="portfolio-block website gradient">
      <div data-aos="fade-down" className="container">
          <div className="heading">
              <h2>Profile</h2>
          </div>
          <div data-aos="fade-up" className="row">

              <div data-aos="fade-up" className="col-md-12 col-lg-6 colprofil">
                  <Galerifoto>
                  <SRLWrapper>
                    <Slider className="gal" data-aos="fade-up"  {...settings}>
                    {loopgaleri}
                      
                    </Slider>
                    </SRLWrapper>
                    </Galerifoto>
              </div>
              <div data-aos="fade-down" className="col-md-12 col-lg-6 colprofil">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                          <a className="nav-link youtube active" id="home-tab" data-toggle="tab" href="#biodata" role="tab" aria-controls="home" aria-selected="true">Biodata</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link youtube" id="profile-tab" data-toggle="tab" href="#pendidikan" role="tab" aria-controls="profile" aria-selected="false">Pendidikan</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link youtube" id="contact-tab" data-toggle="tab" href="#kerja" role="tab" aria-controls="contact" aria-selected="false">Pengalaman Kerja</a>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="biodata" role="tabpanel" aria-labelledby="home-tab">
                          <div className="item">
                              <div className="row">
                                  <div className="col-12">
                                      <h3>{this.props.biodata.nama_lengkap}</h3>
                                  </div>
                                  <table className="table-biodata">
                                      <tbody>
                                      <tr>
                                          <td width="40%">Tempat & tanggal lahir</td>
                                          <td>:</td>
                                          <td>{this.props.biodata.tempat_tanggal_lahir}</td>
                                      </tr>
                                      <tr>
                                          <td width="40%">Pendidikan Terakhir</td>
                                          <td>:</td>
                                          <td>{this.props.biodata.pendidikan_terakhir}</td>
                                      </tr>
                                      <tr>
                                          <td width="40%">E-mail</td>
                                          <td>:</td>
                                          <td>{this.props.biodata.email}</td>
                                      </tr>
                                      <tr>
                                          <td width="40%">Telepon / Ponsel</td>
                                          <td>:</td>
                                          <td>{this.props.biodata.telepon}</td>
                                      </tr>
                                      <tr>
                                          <td width="40%">Alamat</td>
                                          <td>:</td>
                                          <td>{this.props.biodata.alamat}</td>
                                      </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane fade" id="pendidikan" role="tabpanel" aria-labelledby="profile-tab">
                          
                         {looppendidikan} 
                          
                      </div>
                      <div className="tab-pane fade" id="kerja" role="tabpanel" aria-labelledby="contact-tab">
                         
                          {looppekerjaan}

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
    galeri:state.datagaleri,
    biodata:state.databiodata,
    pendidikan:state.datapendidikan,
    pekerjaan:state.datapekerjaan
  }
}

export default connect(mapStatetoprops)(Profil);