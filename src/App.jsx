import "./App.css";
import React from "react";
import Hug from "./assets/Icons.svg";
import Help from "./assets/Icon.svg";
import Add from "./assets/add.svg";
import Logo from "./assets/Union.svg";
import Menu from "./assets/Icon button.svg";
import Chat from "./assets/chat.svg";
import Badge from "./assets/Notification sign.svg";
import Setting from "./assets/cog.svg";
import Profile from "./assets/Avatar.svg";
import Dot from "./assets/dots-vertical.svg";
import Send from "./assets/send.svg";
import Receive from "./assets/Icon (1).svg";
import WalletOne from "./assets/Wallet Icon.svg";
import WalletTwo from "./assets/Wallet Icon (1).svg";
import WalletThree from "./assets/Wallet Icon (2).svg";
import WalletFour from "./assets/Wallet Icon (3).svg";
import WalletFive from "./assets/Wallet Icon (4).svg";
import WalletSix from "./assets/Wallet Icon (5).svg";
import "@fontsource/inter";

function App() {
  return (
    <>
      <div className="myWallet">
        <nav className="sideNavBar">
          <header>
            <div className="logoAndIcon">
              <div className="logo">
                <img src={Logo} alt="Logo"></img>
                <span>Ringku</span>
              </div>
              <img src={Menu} alt="Menu"></img>
            </div>
            <div className="mainNavigation">
              <ul>
                <li>
                  <img src={Chat} alt="Chat" />
                  My Wallet
                </li>
                <li>
                  <img src={Chat} alt="Chat" />
                  My Card
                </li>
                <li>
                  <img src={Chat} alt="Chat" />
                  Finance Chart
                </li>
                <li>
                  <img src={Chat} alt="Chat" />
                  <span>Recent Transactions </span>
                  <img src={Badge} alt="Chat" />
                </li>
              </ul>
            </div>
          </header>
          <footer>
            <ul className="footer">
              <li className="config">
                <img src={Setting} alt="" />
                Settings
              </li>
              <hr className="ruler" />
              <li className="profile">
                <img src={Profile} alt="" />
                Adrian Tra
              </li>
            </ul>
          </footer>
        </nav>
        <section className="body">
          <nav className="topNavbar">
            <img src={Hug} alt="Hug" />
            <img src={Help} alt="Help" />
          </nav>
          <main className="main">
            <span className="text1">My Wallet</span>
            <br />
            <span className="text2">Keep track your financial plan</span>
          </main>
          <div className="content">
            <div className="information">
              <div className="walletInfo">
                <div className="username">
                  <div className="user">
                    <span>👋</span>
                    <span className="text3">Hi Adrian!</span>
                  </div>
                  <img src={Dot} alt="Dot" />
                </div>
                <span className="text4">$124,543</span>
              </div>

              <div className="paymentAction">
                <div className="sendPayment">
                  <img src={Send} alt="Send" className="img-size" />
                  <span className="text5">Send a payment</span>
                </div>
                <hr className="ruler1" />
                <div className="receivePayment">
                  <img src={Receive} alt="Receive" className="img-size" />
                  <span className="text5">Request a payment</span>
                </div>
              </div>
            </div>
            <div className="allWallet">
              <div className="firstWallet">
                <div className="wallet-wrapper">
                  <div className="wallet-item">
                    <div className="wallet-header">
                      <div className="wallet-title">
                        <img src={WalletOne} alt="One" />
                        <span>Emergency Fund</span>
                      </div>
                      <span className="text6">Last paid on August 28,2022</span>
                    </div>
                    <div className="progress-bar">
                      <div className="p-info">
                        <span>
                          $300 <span className="p-val">/ $1000</span>
                        </span>
                        <span className="p-value">30%</span>
                      </div>
                      <div className="p-viz">
                        <progress value=".3" max="1"></progress>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-item">
                    <div className="wallet-header">
                      <div className="wallet-title">
                        <img src={WalletTwo} alt="Two" />
                        <span>Travel Plan</span>
                      </div>
                      <span className="text6">Last paid on June 01,2022</span>
                    </div>
                    <div className="progress-bar">
                      <div className="p-info">
                        <span>
                          $10000 <span className="p-val">/ $20000</span>
                        </span>
                        <span className="p-value">50%</span>
                      </div>
                      <div className="p-viz">
                        <progress value=".5" max="1"></progress>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-item">
                    <div className="wallet-header">
                      <div className="wallet-title">
                        <img src={WalletThree} alt="Three" />
                        <span>Education</span>
                      </div>
                      <span className="text6">Last paid on May 14,2022</span>
                    </div>
                    <div className="progress-bar">
                      <div className="p-info">
                        <span>
                          $7000 <span className="p-val">/ $10000</span>
                        </span>
                        <span className="p-value">70%</span>
                      </div>
                      <div className="p-viz">
                        <progress value=".7" max="1"></progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="secondWallet">
                <div className="wallet-wrapper">
                  <div className="wallet-item">
                    <div className="wallet-header">
                      <div className="wallet-title">
                        <img src={WalletFour} alt="Four" />
                        <span>Foods and Groceries</span>
                      </div>
                      <span className="text6">Last paid on August 28,2022</span>
                    </div>
                    <div className="progress-bar">
                      <div className="p-info">
                        <span>
                          $300 <span className="p-val">/ $1000</span>
                        </span>
                        <span className="p-value">30%</span>
                      </div>
                      <div className="p-viz">
                        <progress value=".3" max="1"></progress>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-item">
                    <div className="wallet-header">
                      <div className="wallet-title">
                        <img src={WalletFive} alt="Five" />
                        <span>Repair Vehicle</span>
                      </div>
                      <span className="text6">Last paid on August 01,2022</span>
                    </div>
                    <div className="progress-bar">
                      <div className="p-info">
                        <span>
                          $900 <span className="p-val">/ $1000</span>
                        </span>
                        <span className="p-value">90%</span>
                      </div>
                      <div className="p-viz">
                        <progress value=".9" max="1"></progress>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-item">
                    <div className="wallet-header">
                      <div className="wallet-title">
                        <img src={WalletSix} alt="Six" />
                        <span>Donation</span>
                      </div>
                      <span className="text6">Last paid on August 20,2022</span>
                    </div>
                    <div className="progress-bar">
                      <div className="p-info">
                        <span>
                          $200 <span className="p-val">/ $1000</span>
                        </span>
                        <span className="p-value">20%</span>
                      </div>
                      <div className="p-viz">
                        <progress value=".2" max="1"></progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="createWallet">
              <img src={Add} alt="" />
              <p className="text7">Create New Wallet</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
