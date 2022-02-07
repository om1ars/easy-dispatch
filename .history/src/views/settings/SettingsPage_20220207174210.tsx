import React from "react";

export default function SettingsPage() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <h2 className="h3 mb-4 page-title">Settings</h2>
            <div className="my-4">
              <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Security
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"

                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
              <h5 className="mb-0 mt-5">Security Settings</h5>
              <p>These settings are helps you keep your account secure.</p>
              <div className="list-group mb-5 shadow">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      <strong className="mb-2">Enable Activity Logs</strong>
                      <p className="text-muted mb-0">
                        Donec id elit non mi porta gravida at eget metus.
                      </p>
                    </div>
                    <div className="col-auto">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="activityLog"
                          defaultChecked
                        />
                        <span className="custom-control-label" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      <strong className="mb-2">2FA Authentication</strong>
                      <span className="badge badge-pill badge-success">
                        Enabled
                      </span>
                      <p className="text-muted mb-0">
                        Maecenas sed diam eget risus varius blandit.
                      </p>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary btn-sm">
                        Disable
                      </button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      <strong className="mb-2">Activate Pin Code</strong>
                      <p className="text-muted mb-0">
                        Donec id elit non mi porta gravida at eget metus.
                      </p>
                    </div>
                    <div className="col-auto">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="pinCode"
                        />
                        <span className="custom-control-label" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="mb-0">Recent Activity</h5>
              <p>Last activities with your account.</p>
              <table className="table border bg-white">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Location</th>
                    <th>IP</th>
                    <th>Time</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">
                      <i className="fe fe-globe fe-12 text-muted mr-2" />
                      Chrome - Windows 10
                    </th>
                    <td>Paris, France</td>
                    <td>192.168.1.10</td>
                    <td>Apr 24, 2019</td>
                    <td>
                      <a hreff="#" className="text-muted">
                        <i className="fe fe-x" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">
                      <i className="fe fe-smartphone fe-12 text-muted mr-2" />
                      App - Mac OS
                    </th>
                    <td>Newyork, USA</td>
                    <td>10.0.0.10</td>
                    <td>Apr 24, 2019</td>
                    <td>
                      <a hreff="#" className="text-muted">
                        <i className="fe fe-x" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">
                      <i className="fe fe-globe fe-12 text-muted mr-2" />
                      Chrome - iOS
                    </th>
                    <td>London, UK</td>
                    <td>255.255.255.0</td>
                    <td>Apr 24, 2019</td>
                    <td>
                      <a hreff="#" className="text-muted">
                        <i className="fe fe-x" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
