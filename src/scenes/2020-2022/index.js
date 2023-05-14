import React from "react";
import './styles.css';

function InitialPortfolio() {
	return (
		<div className="containerOld">
			<h1>Navod Zoysa</h1>
			<p className="short-text">Hello World! Welcome to my corner on the Internet.</p>
			<div className="about">
				<h2 className="sub-heading">About me</h2>
				<p className="explanation-text">
					I'm interested in developing web/mobile applications. Currently working as a Software Engineer Intern at <a href="https://entgra.io/" target="_blank" rel="noreferrer">Entgra</a> and pursuing a bachelor's degree in Computer Science at University of Westminster, UK.
				</p>
			</div>
			<div className="projects">
				<h2>Projects</h2>
				<div className="fieldr">
					<h2 className="project-header">FieldR</h2>
					<a href="https://indoor.fieldr.lk/" target="_blank" rel="noreferrer"><img className="portrait-image" alt="fieldr image" src={require("./images/project images/fieldr image.png")} /></a>
					<h3>React / UI</h3>
					<p className="explanation-text" style={{ textAlign: 'center', paddingBottom: '1%' }}>
						I was part of the development team at <a href="https://fieldr.lk/" target="_blank" rel="noreferrer">FieldR</a>, a recent startup specializing in sports technology 
						in Sri Lanka. I  was responsible for the frontend of the cricket scoring and team management 
						application targeted towards mobile phone users.
						<br/>
						<br/> 
						<a href="https://youtu.be/cdwvMkZ4LfA" target="_blank" rel="noreferrer">View the demo</a>
						<span> | </span>
						<a href="https://indoor.fieldr.lk/" target="_blank" rel="noreferrer">View live website</a>
					</p>
				</div>
				<div className="review-insight">
					<h2 className="project-header">Review Insight</h2>
					<a href="https://main.dehbk4p0y1521.amplifyapp.com/" target="_blank" rel="noreferrer"><img className="landscape-image" alt="review-insight image" src={require("./images/project images/review insight analysis.png")} /></a>
					<h3>React / Node.js / Python / Amazon Web Services</h3>
					<p className="explanation-text" style={{ textAlign: 'center', paddingBottom: '1%' }}>
						Review Insight was developed as my 2nd year Software Development Group Project. It is a web application
						which predicts the reliability of online product reviews.
						<br/>
						<br/> 
						<a href="https://github.com/FallGuys-SDGP/Review-Insight" target="_blank" rel="noreferrer">View source code</a>
						<span> | </span>
						<a href="https://main.dehbk4p0y1521.amplifyapp.com/" target="_blank" rel="noreferrer">View live website</a>
					</p>
				</div>
				<div className="premier-league">
					<h2 className="project-header">Premier League Manager</h2>
					<a href="https://github.com/navodzoysa/Premier-League-Manager" target="_blank" rel="noreferrer"><img className="landscape-image" alt="premier-league image" src={require("./images/project images/premier league manager image.png")} /></a>
					<h3>Angular / Play Framework / Java</h3>
					<p className="explanation-text" style={{ textAlign: 'center', paddingBottom: '1%' }}>
						A hybrid web/console application which simulates a football premier league. 
						The frontend is done using Angular and the backend was done in Java using Play framework.
						<br/>
						<br/> 
						<a href="https://github.com/navodzoysa/Premier-League-Manager" target="_blank" rel="noreferrer">View source code</a>
					</p>
				</div>
				<div className="train-booking">
					<h2 className="project-header">Train Seat Booking Program</h2>
					<a href="https://github.com/navodzoysa/Train-Seat-Booking-Program" target="_blank" rel="noreferrer"><img className="landscape-image" alt="train-booking image" src={require("./images/project images/train seat booking image.png")} /></a>
					<h3>Java / JavaFX / MongoDB</h3>
					<p className="explanation-text" style={{ textAlign: 'center', paddingBottom: '1%' }}>
						A train seat booking program using Java and JavaFX for the UI. Additionally MongoDB 
						is used to save/load all the booking data to/from the database.
						<br/>
						<br/> 
						<a href="https://github.com/navodzoysa/Train-Seat-Booking-Program" target="_blank" rel="noreferrer">View source code</a>
					</p>
				</div>
			</div>
			<h2>Tools & Technologies</h2>
			<div className="tech">
				<img className="logos" alt="Java Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png" />
				<img className="logos" alt="Python Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" />
				<img className="logos" alt="JavaScript Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
				<img className="logos" alt="Nodejs Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
				<img className="logos" alt="Play Framework Logo" src="https://avatars.githubusercontent.com/u/319107?s=200&v=4" />
				<img className="logos" alt="HTML Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
				<img className="logos" alt="CSS Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
				<img className="logos" alt="React Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
				<img className="logos" alt="Angular Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" />
				<img className="logos" alt="MongoDB Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
				<img className="logos" alt="MySQL Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
				<img className="logos" alt="Git Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
				<img className="logos" alt="AWS Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png" />
			</div>
			{/* <div>
				<h2>Articles</h2>
			</div> */}
			<div className="footerOld">
				<p>Get in touch with me via <a href="mailto:navod.contact@gmail.com">email</a> or through my socials below</p>
				<a href="https://github.com/navodzoysa" target="_blank" rel="noreferrer"><img className="contact-logos" alt="GitHub Logo" src={require("./images/logos/github-logo.png")} /></a>
				<a href="https://www.linkedin.com/in/navodzoysa/" target="_blank" rel="noreferrer"><img className="contact-logos" alt="Linkedin Logo" src={require("./images/logos/linkedin-logo.png")} /></a>
				<a href="https://navodzoysa.medium.com" target="_blank" rel="noreferrer"><img className="contact-logos" alt="Medium Logo" src={require("./images/logos/medium-logo.png")} /></a>
				<footer>Developed by <a href="https://github.com/navodzoysa/navodzoysa.github.io" target="_blank" rel="noreferrer">Navod Zoysa</a></footer>
			</div>
		</div>
	);
}

export default InitialPortfolio;