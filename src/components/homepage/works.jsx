import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Internships"
				body={
					<div className="works-body">
						

						<div className="work">
							<img
								src="./trslogo.png"
								alt="TRS"
								className="work-image"
							/>
							<div className="work-title">The Reciprocal Solutions</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
						<div className="work">
							<img
								src="./ecylabs.jpg"
								alt="Ecylabs"
								className="work-image"
							/>
							<div className="work-title">Ecylabs</div>
							<div className="work-subtitle">
								Security Analyst Intern
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>


					</div>
				}
			/>
		</div>
	);
};

export default Works;
