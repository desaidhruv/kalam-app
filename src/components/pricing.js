import React from 'react'
import './join.css'
import img1 from '../media/price1.svg'
import img2 from '../media/price2.svg'

function pricing() {
    return (
        <div>
            <div className="container">
                <div className="pricing-table-wrapper">
                    <ul className="pricing-table">
                        <li className="pricing-table__item item-small">
                            <img src="https://css-tricks.ir/wp-content/themes/css-tricks-ir-1396/images/products/packages/1.svg" alt="" className="pricing-table__img" />
                            <h3 className="pricing-table__title">1 Month</h3>
                            <p className="pricing-table__description">
                                <span className="pricing-table__price">₹ 799/-</span>
                            </p>
                            <ul className="pricing-table__products">
                                <li className="pricing-table__product">• Access to Science Game Link on smartphones.
                                </li>
                                <li className="pricing-table__product">• Weekly Science Magazine.
                                </li>
                                <li className="pricing-table__product">• Daily Science Fun Updates.
                                </li>
                                <li className="pricing-table__product">• 1x Live Weekly Curiosty Sessions with International Scientists.
                                </li>
                                <li className="pricing-table__product">• Sunday Big Science Quiz Opportunity.
                                </li>
                            </ul>
                            {/* <a href="https://rzp.io/l/ylQ0Q1DF3" class="pricing-table__button"><b>Buy Now</b></a> */}
                            <button className="btn2 --animated pricing-table__button" style={{ borderRadius: '5px', fontFamily: '"DM Sans" !important', fontWeight: 'bold', border: 'none', cursor: 'pointer' }} onclick="location.href='https://rzp.io/l/ylQ0Q1DF3'">
                                <span>Buy Now</span>
                            </button>
                        </li>
                        <li className="pricing-table__item pricing-table__item--popular blue-bg pricing-table__item--popular1" data-popular="33% Off">
                            <p className="ribbon">
                                <span className="text"><strong className="bold">48+ students enrolled in 3 hours Limited Seats.</strong></span>
                            </p>
                            <img src="https://css-tricks.ir/wp-content/themes/css-tricks-ir-1396/images/products/packages/2.svg" alt="" className="pricing-table__img popular-img" />
                            <h3 className="pricing-table__title popular-head">3 Months</h3>
                            <img src={img1} className="images" height={20} width={150} />
                            {/* <img src="images/Group 129 (1).svg" alt="" height="20" width="110">
                    <img src="images/Group 132.svg" alt="" height="20" width="50"> */}
                            <p className="pricing-table__description">
                                <span className="pricing-table__price popular-price">  ₹1600/-</span>
                                {/* <span class="pricing-table__label">900 is the real price</span>
                        <span class="pricing-table__save">You save 100</span> */}
                            </p>
                            <ul className="pricing-table__products popular-text">
                                <li className="pricing-table__product">• Access to Science Game on Smartphones &amp; Desktop.
                                </li>
                                <li className="pricing-table__product">• Weekly Science Magazine.
                                </li>
                                <li className="pricing-table__product">• Daily Science Fun Updates.
                                </li>
                                <li className="pricing-table__product">• 2x Live Curiosity Sessions in a week with International Scientists.
                                </li>
                                <li className="pricing-table__product">• Sunday Big Quiz opportunity.
                                </li>
                                <div className="is-divider" />
                                <li className="pricing-table__product">• Personalized Science Project Completion.
                                </li>
                                <li className="pricing-table__product">• Unlimited One on One Live Doubt Solving.
                                </li>
                            </ul>
                            {/* <a href="https://rzp.io/l/a28NFLuMWL" class="pricing-table__button"><b>Buy Now</b></a> */}
                            <button className="btn2 --animated pricing-table__button" style={{ borderRadius: '5px', fontFamily: '"DM Sans" !important', fontWeight: 'bold', border: 'none', cursor: 'pointer' }} onclick="location.href='https://rzp.io/l/a28NFLuMWL'">
                                <span>Buy Now</span>
                            </button>
                        </li>
                        <li className="pricing-table__item pricing-table__item--popular item-big" data-popular="40% Off">
                            <img src="https://css-tricks.ir/wp-content/themes/css-tricks-ir-1396/images/products/packages/3.svg" alt="" className="pricing-table__img" />
                            <h3 className="pricing-table__title">6 Months</h3>
                            <img src={img2} alt="" height={20} width={110} className="images" />
                            <p className="pricing-table__description">
                                <span className="pricing-table__price">₹ 3855/-</span>
                                {/* <span class="pricing-table__label">900 is the real price</span>
                        <span class="pricing-table__save">You save 100</span> */}
                            </p>
                            <ul className="pricing-table__products">
                                <li className="pricing-table__product">• Access to Virtual Science Playground on Mobile (Android + iOS) &amp; Desktop.
                                </li>
                                <li className="pricing-table__product">• Weekly Science Magazine.
                                </li>
                                <li className="pricing-table__product">• Daily Science Fun Updates.
                                </li>
                                <li className="pricing-table__product">• 2x Live Curiosity Sessions in a Week with International Scientists.
                                </li>
                                <li className="pricing-table__product">• Sunday Big Science quiz opportunity.
                                </li>
                                <div className="is-divider" />
                                <li className="pricing-table__product">• Personalized Science Project with International Scientists.
                                </li>
                                <li className="pricing-table__product">•Unlimited One - One Live Doubt Solving.
                                </li>
                                <div className="is-divider" />
                                <li className="pricing-table__product">• Personalised 3D Character to roam in Jigyasu world.
                                </li>
                                <li className="pricing-table__product">• Monthly Personalised Science Show on YT channel.
                                </li>
                            </ul>
                            {/* <a href="https://rzp.io/l/ULGe5zJY" class="pricing-table__button"><b>Buy Now</b></a> */}
                            <button className="btn2 --animated pricing-table__button" style={{ borderRadius: '5px', fontFamily: '"DM Sans" !important', fontWeight: 'bold', border: 'none', cursor: 'pointer' }} onclick="location.href='https://rzp.io/l/ULGe5zJY'">
                                <span>Buy Now</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default pricing
