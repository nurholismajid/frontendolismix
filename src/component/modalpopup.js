import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import Api from '../services/services';
class ModalPopup extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      subject:"",
      email:"",
      date:"",
      message:""
    }
  
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

  funswal = (status,pesan,style)=>{
    swal(status,pesan, style);
} 
handleSubmit = (e) => {
    const data = {
      title: this.state.subject + this.state.date,
      status: "publish",
      acf: {
      subject: this.state.subject,
      emai: this.state.email,
      tanggal: this.state.date,
      pesan: this.state.message
      }
    }

    const config = {
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0ZGV2ZWxvcC50ZXN0IiwiaWF0IjoxNjM5NjU3MTEwLCJuYmYiOjE2Mzk2NTcxMTAsImV4cCI6MTY0MDI2MTkxMCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.DzGuIef8_8fYWbWS_zAw3rShT1H7X0Fs2-O7ewtaSWc'
      }

    }

    Api.post('?rest_route=/wp/v2/pesan',data,config)
          .then(res => {
            this.funswal("Sukses","Pesan Terkirim","success");
    })   

  

}

  render(){  
    return(
    <div className="modal fade" id="hubungisaya" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog hubungisaya" role="document">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="hubungisayaLabel">Hubungi Saya</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                        <div className="form-group"><label >Subject</label><select name="subject" onChange={this.handleChange} className="form-control" id="subject"><option >Pilih Subject</option><option value="Project Website / Mobile">Project Website / Mobile</option><option value="Project Content Editor">Project Content Editor</option><option value="Lainnya">Lainnya</option></select></div>
                        <div className="form-group"><label >Email</label><input name="email" onChange={this.handleChange} className="form-control" type="email" id="email"></input></div>
                        <div className="form-group"><label >Tanggal</label><input name="date" onChange={this.handleChange} className="form-control" type="date" id="date"></input></div>
                        <div className="form-group"><label >Pesan</label><textarea name="message" onChange={this.handleChange} rows="5" className="form-control" id="message"></textarea></div>
                        <div className="form-group"><button onClick={this.handleSubmit} className="btn btn-primary btn-block" data-dismiss="modal" >Kirim Pesan</button></div>
                </div>
                <div className="modal-footer">

                </div>
              </div>
          </div>
      </div>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    option:state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(ModalPopup);