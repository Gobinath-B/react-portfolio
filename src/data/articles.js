import React from "react";

function article_1() {
	return {
		date: "16 Sept 2023",
		title: "Pushing Limits: How We Triumphed in a 24-Hour Hackathon at SNS College of Technology",
		description:
			"In the world of technology, innovation and determination often go hand in hand. The ability to push one's limits and tackle complex challenges head-on is what sets exceptional individuals apart from the rest. This is the story of how a team of dedicated individuals, including myself, conquered the odds and emerged victorious in a grueling 24-hour hackathon at SNS College of Technology.",
		keywords: [
			"24 hours hackathon",
			"Gobinath",
			"Gobinath B",
			"Gobinath Boopathiraj",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<a href="https://www.linkedin.com/pulse/devsecops-enhancing-security-development-process-gobinath-boopathiraj/?trackingId=hdv7rvy3TUmx3nlkYKYMqw%3D%3D" rel="noreferrer"></a>
					<img
						src="../hackathon.JPG"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "28 July 2023",
		title: "DevSecOps: Enhancing Security in the Development Process",
		description:
			"DevSecOps, a term derived from the combination of Development, Security, and Operations, has gained significant traction in the software industry. It represents a cultural shift towards integrating security practices into the software development process from the very beginning. ",
		style: ``,
		keywords: [
			"DevSecOps",
			"Gobinath",
			"Gobinath B",
			"Gobinath Boopathiraj",
		],
		body: (
			<React.Fragment>
				<h1>DevSecOps, a term derived from the combination of Development, Security, and Operations, has gained significant traction in the software industry.</h1>

				<img
						src="../devsec.jpg"
						alt="random"
						className="randImage"
					/>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
