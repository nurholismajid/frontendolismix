import React, { Component } from 'react';
import './App.css';
import HeaderDesktop from './component/headerdesktop';
import HeaderMobile from './component/headermobile';
import Footer from './component/footer';
import Modal from './component/modalpopup';
import Beranda from './component/beranda';
import Youtube from './component/youtube';
import Keahlian from './component/keahlian';
import Profil from './component/profil';
import Portofolio from './component/portofolio';
import Api from './services/services';
import {connect} from 'react-redux';


class App extends Component  {

  constructor(props) {
    super(props);

   
  
  }

  async componentDidMount() {
    const baseurl = 'http://127.0.0.1:1337';

    await Api.get('website-identity')
  .then(res => {
    const identity = res.data;
    const dataidentity =  {
      title: identity.Title,
      headline: identity.Headline,
      facebook: identity.Facebook,
      instagram: identity.Instagram,
      youtube: identity.Youtube,
      logo: baseurl+identity.Logo.formats.small.url,
      icon: baseurl+identity.Icon.formats.small.url,
      
    }
    console.log(dataidentity);
    this.props.updatewebidentity(dataidentity);
  })
    Api.get('beranda-website')
        .then(res => {
          const beranda = res.data;
          const databeranda ={
            titlebutton: beranda.TitleButton,
            description: beranda.Description,
            bannervideo: baseurl+beranda.BannerVideo.url,
            profile: baseurl+beranda.Profile.formats.small.url,
              
          }
          sessionStorage.setItem('videostate', baseurl+beranda.BannerVideo.url);

    this.props.updateberandawebsite(databeranda);

        })

        Api.get('video-youtubes')
        .then(res => {
          const youtube = res.data;       
          this.props.updateyoutube(youtube)

        })
        Api.get('bidang-dan-keahlians')
        .then(res => {
          const keahlian = res.data;       
          this.props.updatekeahlian(keahlian);

        })

        Api.get('profil-saya')
        .then(res => {
          const profil = res.data; 
          const dataprofile = profil.GaleriFoto.GaleriFoto;
          const databiodata = profil.Biodata;
          const datapendidikan = profil.Pendidikan;
          const datapekerjaan = profil.Pekerjaan;      
          this.props.updategaleri(dataprofile);
          this.props.updatebiodata(databiodata);
          this.props.updatependidikan(datapendidikan);
          this.props.updatepekerjaan(datapekerjaan);

        })

        Api.get('portofolios')
        .then(res => {
          const portofolio = res.data; 
          
          this.props.updateportofolio(portofolio);

        })

 
 // document.addEventListener("contextmenu", function(e){e.preventDefault();}, false);
}



  render(){

  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile />
      <main className="page lanidng-page">
      <Beranda />
      <Profil />
      <Keahlian />
      <Youtube />
      <Portofolio />
      </main>
      <Footer />
      <a data-aos="fade-in" href="#" className="gotoup"><i className="far fa-caret-square-up"></i></a>
      <Modal />
      </div>
  );

}
}

const mapDipatchToprops = (dispatch) =>{
return{
  updatewebidentity: (data) => dispatch({type:'UPDATEIDENTITY',datawebsiteidentity:data}),
  updateberandawebsite: (data) => dispatch({type:'UPDATEBERANDA',databerandawebsite:data}),
  updateyoutube: (data) => dispatch({type:'UPDATEYOUTUBE',datayoutube:data}),
  updatekeahlian: (data) => dispatch({type:'UPDATEKEAHLIAN',datakeahlian:data}),
  updategaleri: (data) => dispatch({type:'UPDATEGALERI',datagaleri:data}),
  updatebiodata: (data) => dispatch({type:'UPDATEBIODATA',databiodata:data}),
  updatependidikan: (data) => dispatch({type:'UPDATEPENDIDIKAN',datapendidikan:data}),
  updatepekerjaan: (data) => dispatch({type:'UPDATEPEKERJAAN',datapekerjaan:data}),
  updateportofolio: (data) => dispatch({type:'UPDATEPORTOFOLIO',dataportofolio:data}),
}
}

const mapStatetoprops=(state)=>{
  return{
    option:state.dataoption
  }
}

export default connect(mapStatetoprops,mapDipatchToprops)(App);