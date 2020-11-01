import React from 'react';
import $ from 'jquery';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
class Profile extends React.Component{
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
                        <div class="col-md-4">
                            <ul style={{listStyle: 'none'}}>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            <li>Abdullahi Mahamed Said</li>
                            </ul>
                        </div>
                        <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <div className="row">
                                <div class="col-lg-12">
                      <div class="border-bottom text-center pb-4">
                        <div class="mb-3">
                          <h3>Suleiman Said Hamid</h3>
                         
                        </div>
                     
                       
                      </div>
                     
                     
                      <div class="py-4">
                      <p class="clearfix">
                          <span class="float-left">
                            totalt skyldig:
                          </span>
                          <span class="float-right text-muted">
                             5250,00
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          skyldig i dag:
                          </span>
                          <span class="float-right text-muted">
                            2150,00
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Sum reservasjoner:
                          </span>
                          <span class="float-right text-muted">
                            3100,00
                          </span>
                        </p>
                      <p class="clearfix">
                          <span class="float-left">
                          Aktive Klasser:
                          </span>
                          <span class="float-right text-muted">
                            B96
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                            Mobil:
                          </span>
                          <span class="float-right text-muted">
                            93437868
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Fodlselsnummer:
                          </span>
                          <span class="float-right text-muted">
                            20057220571(48 ar,M)
                          </span>
                        </p>
                        <p class="clearfix">
                          <span class="float-left">
                          Adresse:
                          </span>
                          <span class="float-right text-muted">
                            Skuggaberg 24,5545 Vormdal
                          </span>
                        </p>
                        
                      </div>

                      <div className="row">
                          <div className="col-md-4">
                          <button class="btn btn-light btn-block  ">Slett elev</button>
                          </div>
                          
                          <div className="col-md-4">
                          <button class="btn btn-success btn-block  ">kalender</button>
                          </div>
                          
                          <div className="col-md-4">
                          <button class="btn btn-success btn-block  ">kundekort</button>
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

export default Profile;