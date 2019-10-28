import React, { Component } from 'react'

export default class UserStats extends Component {
  render() {
    return (
            <div className="card card-coin card-plain">
              <div className="card-header">
                <img src="../assets/img/mike.jpg" className="img-center img-fluid rounded-circle"/>
                <h4 className="title">Transactions</h4>
              </div>
              <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#linka">
                      Wallet
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#linkb">
                      Send
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#linkc">
                      News
                    </a>
                  </li>
                </ul>
                <div className="tab-content tab-subcategories">
                  <div className="tab-pane active" id="linka">
                    <div className="table-responsive">
                      <table className="table tablesorter " id="plain-table">
                        <thead className=" text-primary">
                          <tr>
                            <th className="header">
                              COIN
                            </th>
                            <th className="header">
                              AMOUNT
                            </th>
                            <th className="header">
                              VALUE
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              BTC
                            </td>
                            <td>
                              7.342
                            </td>
                            <td>
                              48,870.75 USD
                            </td>
                          </tr>
                          <tr>
                            <td>
                              ETH
                            </td>
                            <td>
                              30.737
                            </td>
                            <td>
                              64,53.30 USD
                            </td>
                          </tr>
                          <tr>
                            <td>
                              XRP
                            </td>
                            <td>
                              19.242
                            </td>
                            <td>
                              18,354.96 USD
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane" id="linkb">
                    <div className="row">
                      <label className="col-sm-3 col-form-label">Pay to</label>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" />
                          <span className="form-text">Please enter a valid address.</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-3 col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="1.587"/>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send"></i></button>
                  </div>
                  <div className="tab-pane" id="linkc">
                    <div className="table-responsive">
                      <table className="table tablesorter " id="plain-table">
                        <thead className=" text-primary">
                          <tr>
                            <th className="header">
                              Latest Crypto News
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              The Daily: Nexo to Pay on Stable...
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Venezuela Begins Public of Nation...
                            </td>
                          </tr>
                          <tr>
                            <td>
                              PR: BitCanna – Dutch Blockchain...
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}
