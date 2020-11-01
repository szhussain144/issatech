import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

class Bedriften extends React.Component {
    render() {
        return (
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {/* sms form */}
                            <div class="grid-margin stretch-card">
                                <div class="card">
                                    <div className="row">
                                        <div class="card-body col-md-6">
                                          
                                            <div className="form-group">
                                                <div className="row">
                                                <input type="text" className="form-control col-md-6" value="984046022" disabled /><input type="button" className="form-control col-md-3" value="Oppdater data" disabled  /><input type="button" className="form-control col-md-3" value="Fjern" disabled  />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Berge Sag Og Treslast AS" value="Berge Sag Og Treslast AS" disabled></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Tilleggsnavn"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Haukelivegen 676"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Adresselinje 2"></input>
                                            </div>
                                            <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Haukelivegen 676"></input>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Adresselinje 2"></input>
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <label class="switch">
                                                <input type="checkbox" />
                                                <span class="slider"></span>
                                                </label>
                                            </div>
                                            </div>
                                            


                                        {/* message body */}

                                        <div class="col-md-6">

                                            <div class="card-body">
                                            <div className="form-group">
                                                <input type="email" class="form-control" id="exampleInputUsername2" placeholder="Enter Email" value="fakturabst@bergesag.no"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Tilleggsnavn"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Haukelivegen 676"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Adresselinje 2"></input>
                                            </div>
                                            <textarea rows="6" cols="69"></textarea>
                                            <button type="submit" className="btn btn-primary mr-2">Lagre</button>
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

export default Bedriften;