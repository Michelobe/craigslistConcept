import React, { Component } from 'react';
import Gallery from './Gallery.js';

export default class Details extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'detailsPage'}>
				<div className={'container'}>
					<div className={'whiteBox'}>
						{/* =======================SUBMENU=========================== */}
						<section className={'subMenu'}>
							<div className={'direction'}>
								<div className={'prev btn'}>
									Prev
								</div>
								<div className={'next btn'}>
									Next
								</div>
							</div>
							<nav className={'subLinks'}>
								<div className = {'link'}>More ads by this user</div>
								<div className = {'link'}>Print</div>
								<div className = {'link'}>Share</div>
								<div className = {'link'}>Contact Seller</div>
							</nav>
						</section>
						{/* =======================SUBMENU=========================== */}

						{/* ===============================CONTENTAREA================================== */}
						<section className={'contentArea'}>
							<div className={'mediaColumn'}>
                                <Gallery />
							</div>
							<div className={'detailsColumn'}>
								<div className={'date'}>Posted: Apr 26th</div>
								<h3 className="title">Black 2008 Acura Rdx</h3>
								<h4 className={'price'}>$8,900</h4>
								<div className={'moreDetails'}>
									<div className={'info'}>
										<label>Vin</label>
										<h5>WBAKA8C55BC446879</h5>
									</div>
									<div className={'info'}>
										<label>Mileage</label>
										<h5>107,000</h5>
									</div>
									<div className={'info'}>
										<label>Transmission</label>
										<h5>Auto</h5>
									</div>
									<div className={'info'}>
										<label>Fuel</label>
										<h5>93 octane</h5>
									</div>
									<div className={'info'}>
										<label>Drive Train</label>
										<h5>AWD</h5>
									</div>
									<div className={'info'}>
										<label>Exterior Color</label>
										<h5>Black</h5>
									</div>
								</div>
								<div className={'description'}>
									<label>Description</label>
									<p>
										Low mileage and in excellent condition! This "Nighthawk
										Black Pearl" 2007 Acura RDX SH-AWD has the Technology
										Package! All-Wheel-Drive and very safe! It comes with the
										Automatic Transmission, Turbocharged 2.3-Liter DOHC i-VTEC
										Engine, Alloy Wheels, Backup Camera, Climate Control, Heated
									</p>
									<p>
										Leather Seats, GPS Navigation System, Tow Hitch, Power
										Equipment Group, Cruise Control, Power Sunroof, Acura/ELS
										Surround Premium AM/FM/XM Sound System, Keyless Entry,
										Privacy Glass & more! The odometer is 23k miles below market
									</p>
									<p>
										ass & more! The odometer is 23k miles below market average!
										We serviced & detailed this one, too: new front door
										speakers, new wipers & more! You won't find many at this
										price that are this nice! Don't hesitate...this won't last
										long!
									</p>
								</div>
							</div>
						</section>
						{/* ===============================CONTENTAREA================================== */}
					</div>
				</div>
			</div>
		);
	}
}
