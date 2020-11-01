import React from 'react';
import $ from 'jquery';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar'
class Home extends React.Component{
    componentDidMount(){
              window.fullCalender();
              window.modalLoad();
    }
    render(){
        return(
            <div class="container-scroller">
                <Header />
                <div class="container-fluid page-body-wrapper">
                    <Sidebar/>
                    <div class="main-panel">
                    <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">Fullcalendar</h4>
                            <div id="calendar" class="full-calendar"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <a href="https://www.urbanui.com/" target="_blank">Urbanui</a>. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
                    </div>
                    </footer>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Home;