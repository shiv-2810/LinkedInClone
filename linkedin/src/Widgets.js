import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>

			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle(
				"PM Modi unveils bronze National Emblem",
				"Top news- 9989 readers"
			)}
			{newsArticle("Pandemic is not over says WHO", "Top news- 99 readers")}
			{newsArticle("Tesla hits new highs", "Top news- 799 readers")}
			{newsArticle(
				"IND vs ENG 1st ODI Highlights: Rohit Sharma slams 50, India win by 10 wickets",
				"Top news- 691 readers"
			)}
			{newsArticle(
				"PM Modi unveils bronze National Emblem",
				"Top news- 999 readers"
			)}
			{newsArticle(
				"PM Modi unveils bronze National Emblem",
				"Top news- 999 readers"
			)}
		</div>
	);
}

export default Widgets;
