import React from 'react';

class Sidebar extends React.Component{
    componentDidMount(){
        window.modalLoad();
    }
    render(){
        return (
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <div className="row" id="">
                    <button type="button" class="custom_btn btn btn-light" >Ny elev</button>
                    <button type="button" class="custom_btn btn btn-danger">Logg ut</button>
                </div>
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  <i class="mdi mdi-home menu-icon"></i>
                  <span class="menu-title">Elever</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/widgets/widgets.html">
                  <i class="mdi mdi-puzzle menu-icon"></i>
                  <span class="menu-title">Bedrifter</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i class="mdi mdi-circle-outline menu-icon"></i>
                  <span class="menu-title">Kundeokonomi</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                  <i class="mdi mdi-layers menu-icon"></i>
                  <span class="menu-title">TSK</span>
            
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                  <i class="mdi mdi-view-headline menu-icon"></i>
                  <span class="menu-title"> Kursoversikt</span>
                  
                </a>
             
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                  <i class="mdi mdi-pencil-box-outline menu-icon"></i>
                  <span class="menu-title">Meldinger</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                  <i class="mdi mdi-chart-pie menu-icon"></i>
                  <span class="menu-title">Rappoter</span>                
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                  <i class="mdi mdi-grid-large menu-icon"></i>
                  <span class="menu-title">TABSweb</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/ui-features/popups.html">
                  <i class="mdi mdi-comment-alert menu-icon"></i>
                  <span class="menu-title">TABSnytt</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pages/ui-features/notifications.html">
                  <i class="mdi mdi-bell menu-icon"></i>
                  <span class="menu-title">TABS fakturaer</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                  <i class="mdi mdi-emoticon menu-icon"></i>
                  <span class="menu-title">oppfolgingslister</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                  <i class="mdi mdi-map menu-icon"></i>
                  <span class="menu-title">Dokumentarkiv</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i class="mdi mdi-account menu-icon"></i>
                  <span class="menu-title"> Skoleinnstillinger</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                  <i class="mdi mdi-alert-circle menu-icon"></i>
                  <span class="menu-title">Brukere </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                  <i class="mdi mdi-file menu-icon"></i>
                  <span class="menu-title">Varelager</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                  <i class="mdi mdi-basket menu-icon"></i>
                  <span class="menu-title">Ressurer</span>
                </a>
              </li>
            </ul>
                   
          </nav>
        );
    }
}

export default Sidebar;