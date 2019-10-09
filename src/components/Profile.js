import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div class="profile-page">
  <div class="wrapper mb-5 container">
    <div class="page-header">
      <img src="../assets/img/dots.png" class="dots" />
      <img src="../assets/img/path4.png" class="path" />
      <div class="pt-200 align-items-center">
        <div class="row">
        <div class="col-md-6">
            <div class="card card-plain">
              <div class="card-header">
                <h1 class="text-left">Contact</h1>
                {/* <h5 class="text-on-back">03</h5> */}
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Your Name</label>
                        <input type="text" class="form-control" value="Mike" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="mike@email.com" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" value="001-12321345" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Company</label>
                        <input type="text" class="form-control" value="CreativeTim" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="Hello there!" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-round float-right" rel="tooltip" data-original-title="Can't wait for your message" data-placement="right">Send text</button>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 ml-auto mr-auto">
            <div class="card card-coin card-plain">
              <div class="card-header">
                <img src="../assets/img/mike.jpg" class="img-center img-fluid rounded-circle"/>
                <h4 class="title">Transactions</h4>
              </div>
              <div class="card-body">
                <ul class="nav nav-tabs nav-tabs-primary justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#linka">
                      Wallet
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#linkb">
                      Send
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#linkc">
                      News
                    </a>
                  </li>
                </ul>
                <div class="tab-content tab-subcategories">
                  <div class="tab-pane active" id="linka">
                    <div class="table-responsive">
                      <table class="table tablesorter " id="plain-table">
                        <thead class=" text-primary">
                          <tr>
                            <th class="header">
                              COIN
                            </th>
                            <th class="header">
                              AMOUNT
                            </th>
                            <th class="header">
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
                  <div class="tab-pane" id="linkb">
                    <div class="row">
                      <label class="col-sm-3 col-form-label">Pay to</label>
                      <div class="col-sm-9">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" />
                          <span class="form-text">Please enter a valid address.</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-3 col-form-label">Amount</label>
                      <div class="col-sm-9">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="1.587"/>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-simple btn-primary btn-icon btn-round float-right"><i class="tim-icons icon-send"></i></button>
                  </div>
                  <div class="tab-pane" id="linkc">
                    <div class="table-responsive">
                      <table class="table tablesorter " id="plain-table">
                        <thead class=" text-primary">
                          <tr>
                            <th class="header">
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
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
    )
  }
}
