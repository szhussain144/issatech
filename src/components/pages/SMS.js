import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

class SMS extends React.Component{
    render(){
        return (
            <div class="container-scroller">
                <Header />
                <div class="container-fluid page-body-wrapper">
                    <Sidebar/>
                    <div class="main-panel">
                    <div class="content-wrapper">
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SMS;