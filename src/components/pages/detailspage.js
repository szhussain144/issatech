import React from 'react';
import $ from 'jquery';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
class DetailsPage extends React.Component{
    componentDidMount(){
        // $("#sidebar").css('width','70px');
    }
    render(){
        return (
            <div class="container-scroller">
                <Header />
                <div class="container-fluid page-body-wrapper">
                    <Sidebar/>
                    <div class="main-panel">
                    <div class="content-wrapper">
                    <div class="row">

                    <div class="mail-list-container col-md-4 pt-4 pb-4 border-right bg-white">
                <div class="mail-list">
                  <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input"/> <i class="input-helper"></i></label></div>
                  <div class="content">
                    <p class="sender-name">Barag Sag Og Trelast AS</p>
                  </div>
                  <div class="details">
                    <i class="mdi mdi-star-outline"></i>
                  </div>
                </div>
                <div class="mail-list new_mail">
                  <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input" checked=""/> <i class="input-helper"></i></label></div>
                  <div class="content">
                    <p class="sender-name">Bilgummilageret AS</p>
                  </div>
                  <div class="details">
                    <i class="mdi mdi-star favorite"></i>
                  </div>
                </div>
                <div class="mail-list">
                  <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input"/> <i class="input-helper"></i></label></div>
                  <div class="content">
                    <p class="sender-name">Byggfirma Kjellesik & Severinsen AS </p>
                  </div>
                  <div class="details">
                    <i class="mdi mdi-star-outline"></i>
                  </div>
                </div>
                <div class="mail-list">
                  <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input"/> <i class="input-helper"></i></label></div>
                  <div class="content">
                    <p class="sender-name">Risa AS</p>
                  </div>
                  <div class="details">
                    <i class="mdi mdi-star favorite"></i>
                  </div>
                </div>
                <div class="mail-list">
                  <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input"/> <i class="input-helper"></i></label></div>
                  <div class="content">
                    <p class="sender-name">Trafikkdirigering AS</p>
                  </div>
                  <div class="details">
                  </div>
                </div>
              </div>
                        {/* <li>Abdullahi Mahamed Said</li> */}
                            
                        <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <div className="row">
                                <div class="col-lg-12">
                      <div class="border-bottom text-center pb-4">
                        <div class="mb-3">
                          <h3>Berge Sag Og Trelast AS</h3>
                         
                        </div>
                     
                       
                      </div>
                     
                     
                      <div class="py-4">
                      <p class="clearfix">
                          <span class="float-left">
                            Saldo:
                          </span>
                          <span class="float-right text-muted">
                             2100,00
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          saldo i dag:
                          </span>
                          <span class="float-right text-muted">
                            2100,00
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Orgnr.:
                          </span>
                          <span class="float-right text-muted">
                            984046022
                          </span>
                        </p>
                      <p class="clearfix">
                          <span class="float-left">
                          Epost:
                          </span>
                          <span class="float-right text-muted">
                            fakturabst@bergesag.no
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                            Kontaktperson:
                          </span>
                          <span class="float-right text-muted">
                            Rune S.Pedersen
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Adresse:
                          </span>
                          <span class="float-right text-muted">
                            Haukelivegen 676
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Postnummer:
                          </span>
                          <span class="float-right text-muted">
                            5582
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          sted:
                          </span>
                          <span class="float-right text-muted">
                            Olensveg
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          telefon:
                          </span>
                          <span class="float-right text-muted">
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Kommentar:
                          </span>
                          <span class="float-right text-muted">
                          </span>
                        </p>
                        
                      </div>

                      <div className="row">
                          <div className="col-md-4">
                          <button class="btn btn-success btn-block  ">Bedriftskort</button>
                          </div>
                      </div>
                      
                    </div>
                    
           
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsPage;