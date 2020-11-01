import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

class EPost extends React.Component {
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
                                            <h4 class="card-title">Send Ny Sms</h4>
                                            <p class="card-description">
                                                Send
                                        </p>
                                            <div class="form-group row">
                                                <div className="col table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>til</th>
                                                                <th>Navn</th>
                                                                <th>EPost</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="form-check-label">
                                                                        <input type="checkbox" class="form-check-input" checked="" />
                                                                        <i class="input-helper"></i></label>
                                                                </td>
                                                                <td>
                                                                    Suleiman Said Hamid
                                                            </td>
                                                                <td>

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="form-group">

                                                <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                                                    <option>27300000000000450 -kan besvares</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">

                                                <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                                                    <option>Vegl Mal</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">

                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Emne"></input>
                                            </div>
                                            <textarea rows="6" cols="69"></textarea>
                                            <div className="form-group">

                                                <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                                                    <option>-legg till vedlegg fra dokumentarkiv</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>

                                            <div class="col-lg-13 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title d-flex">Dropify
                                                           
                                                        </h4>
                                                        <div className="dropify-wrapper">
                                                            <div className="dropify-message">
                                                                <span className="file-icon">
                                                                </span> 
                                                                </div>
                                                            <div class="dropify-loader"></div>
                                                            <div class="dropify-errors-container"><ul></ul></div>
                                                            <input type="file" class="dropify" />
                                                            {/* <button type="button" class="dropify-clear">Remove</button> */}
                                                            <div class="dropify-preview">
                                                                <span class="dropify-render"></span>
                                                                <div class="dropify-infos">
                                                                    <div class="dropify-infos-inner">
                                                                        <p class="dropify-filename">
                                                                            <span class="file-icon"></span>
                                                                            <span class="dropify-filename-inner"></span></p>
                                                                        </div></div></div></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <button type="submit" className="btn btn-primary mr-2">Send</button>
                                            <button className="btn btn-light">NullStill</button>
                                            <button className="btn btn-light">Hent Siste epost</button>

                                        </div>



                                        {/* message body */}

                                        <div class="col-md-6">

                                            <div class="card-body">

                                                <div class="card card-inverse-primary">
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            Meldingsloggen er tom</p>
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

export default EPost;