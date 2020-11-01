import React from 'react';

class Login extends React.Component{

    render(){
        return(
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                <div class="content-wrapper d-flex align-items-center auth px-0">
                    <div class="row w-100 mx-0">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div class="brand-logo">
                            <img src="../../../../images/logo.svg" alt="logo" />
                        </div>
                        <h4>Hello! let's get started</h4>
                        <h6 class="font-weight-light">Sign in to continue.</h6>
                        <form class="pt-3">
                            <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div class="form-group">
                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="mt-3">
                            <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="/">SIGN IN</a>
                            </div>
                            
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>
        );
    }
}
export default Login;