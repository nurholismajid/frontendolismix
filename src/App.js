import React, { Component } from 'react';
import baseurl from './services/baseurl';
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
    // await Api.get('?rest_route=/acf/v3/options/option/')
    // .then(res => {
      
    //   const data = res.data.acf;
    //   const dataidentity = data.identitas_website;
    //   const databeranda = data.beranda_website;
    //   const mybiodata = data.my_biodata;
    //    this.props.updatewebidentity(dataidentity);
    //    sessionStorage.setItem('videostate', databeranda.banner_video);
    //    this.props.updateberandawebsite(databeranda);
    //    this.props.updategaleri(mybiodata.galeri_foto);
    //    this.props.updatebiodata(mybiodata.biodata);
    //    this.props.updatependidikan(mybiodata.pendidikan);
    //    this.props.updatepekerjaan(mybiodata.pekerjaan);
    // })

    await Api.get('?rest_route=/olismix/v1/identitas')
    .then(res => {
       
      this.props.updatewebidentity(res.data);
       
    })
    
    Api.get('?rest_route=/olismix/v1/beranda')
    .then(res => {
      this.props.updateberandawebsite(res.data);
      sessionStorage.setItem('videostate', res.data.banner_video);
    })

    Api.get('?rest_route=/olismix/v1/mybiodata')
    .then(res => {
      this.props.updategaleri(res.data.galeri_foto);
      this.props.updatebiodata(res.data.biodata);
      this.props.updatependidikan(res.data.pendidikan);
      this.props.updatepekerjaan(res.data.pekerjaan);

      const datasosmed ={
        "facebook" : res.data.facebook,
        "instagram" : res.data.instagram,
        "youtube" : res.data.youtube,
      }

      this.props.updatesosmed(datasosmed);

    })

    Api.get('?rest_route=/olismix/v1/keahlian')
    .then(res => {
      this.props.updatekeahlian(res.data);
    })

    Api.get('?rest_route=/olismix/v1/youtube')
    .then(res => {
      this.props.updateyoutube(res.data);
    })
    Api.get('?rest_route=/olismix/v1/projek')
        .then(res => {
          this.props.updateportofolio(res.data);
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
  updatesosmed: (data) => dispatch({type:'UPDATESOSMED',datasosmed:data}),

}
}

const mapStatetoprops=(state)=>{
  return{
    option:state.dataoption
  }
}

export default connect(mapStatetoprops,mapDipatchToprops)(App);