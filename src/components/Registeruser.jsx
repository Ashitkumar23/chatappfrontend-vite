import React from "react";
import "../components/register.css";
import * as mdb from "mdb-ui-kit"; // Optional if you need manual init
window.mdb = mdb;

function Registeruser() {
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        id="fullname"
                        className="form-control form-control-lg"
                      />
                      
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="username"
                        placeholder="User Name"
                        required
                        className="form-control form-control-lg"
                      />
                      
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Email"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        required
                      />
                    </div>

                    {/* <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div> */}

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3cg"
                      >
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registeruser;
