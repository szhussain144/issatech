import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

class SMS extends React.Component {
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
                                                            <th>Mobil</th>
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
                                                                93237868
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
                                            <textarea rows="6" cols="69"></textarea>
                                            <div className="form-group">

                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Username"></input>
                                            </div>
                                            <div className="form-group">

                                                <input type="text" class="form-control" id="exampleInputUsername2" placeholder="MVH. ONLINE 24-7 TRAFIKKSKOLE AS"></input>
                                            </div>
                                            <div class="card card-inverse-primary">
                                                <div class="card-body">
                                                <p class="card-text">
                                                    Brukte tegn:<strong> 33</strong> Ledige tegn: <strong> 771</strong> SMS pr. mottaker: <strong>1</strong> SMS totalt: <strong>1</strong></p>
                                                </div>
                                            </div>
                                            <br/>
                                            <button type="submit" className="btn btn-primary mr-2">Send</button>
                                            <button className="btn btn-light">NullStill</button>
                                        </div>



                                        {/* message body */}

                                        <div class="col-md-6">

                                            <div class="card-body">
                                                <div class="mt-8">
                                                    <div class="timeline">
                                                        <div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                                            <div class="timeline-badge"></div>
                                                            <div class="timeline-panel">
                                                                <div class="timeline-heading">
                                                                    <h6 class="timeline-title">Bootstrap 4 Alpha 6</h6>
                                                                </div>
                                                                <div class="timeline-body">
                                                                    <p>Alpha 6 has landed, and it’s one of our biggest ships to date.</p>
                                                                </div>
                                                                <div class="timeline-footer d-flex align-items-center flex-wrap">
                                                                    <i class="mdi mdi mdi-signal text-muted mr-1"></i>
                                                                    <span>25</span>
                                                                    <span class="ml-md-auto font-weight-bold">10th Aug 2017</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                                            <div class="timeline-badge"></div>
                                                            <div class="timeline-panel">
                                                                <div class="timeline-heading">
                                                                    <h6 class="timeline-title">Bootstrap 4 Alpha 6</h6>
                                                                </div>
                                                                <div class="timeline-body">
                                                                    <p>Alpha 6 has landed, and it’s one of our biggest ships to date.</p>
                                                                </div>
                                                                <div class="timeline-footer d-flex align-items-center flex-wrap">
                                                                    <i class="mdi mdi mdi-signal text-muted mr-1"></i>
                                                                    <span>25</span>
                                                                    <span class="ml-md-auto font-weight-bold">10th Aug 2017</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                                            <div class="timeline-badge"></div>
                                                            <div class="timeline-panel">
                                                                <div class="timeline-heading">
                                                                    <h6 class="timeline-title">Bootstrap 4 Alpha 6</h6>
                                                                </div>
                                                                <div class="timeline-body">
                                                                    <p>Alpha 6 has landed, and it’s one of our biggest ships to date.</p>
                                                                </div>
                                                                <div class="timeline-footer d-flex align-items-center flex-wrap">
                                                                    <i class="mdi mdi mdi-signal text-muted mr-1"></i>
                                                                    <span>25</span>
                                                                    <span class="ml-md-auto font-weight-bold">10th Aug 2017</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                                            <div class="timeline-badge"></div>
                                                            <div class="timeline-panel">
                                                                <div class="timeline-heading">
                                                                    <h6 class="timeline-title">Bootstrap 4 Alpha 6</h6>
                                                                </div>
                                                                <div class="timeline-body">
                                                                    <p>Alpha 6 has landed, and it’s one of our biggest ships to date.</p>
                                                                </div>
                                                                <div class="timeline-footer d-flex align-items-center flex-wrap">
                                                                    <i class="mdi mdi mdi-signal text-muted mr-1"></i>
                                                                    <span>25</span>
                                                                    <span class="ml-md-auto font-weight-bold">10th Aug 2017</span>
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
                </div>
            </div>
        );
    }
}

export default SMS;