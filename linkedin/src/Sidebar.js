import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
	const recentItems = [
		{ title: "reactjs" },
		{ title: "software engeneering" },
		{ title: "react native" },
		{ title: "developer" },
	];
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Shivam Kumar</h2>
				<h4>s9431494772@gmail.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,545</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,545</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItems.map((item, index) => {
					return (
						<div className="sidebar__recentItem" key={index}>
							<span className="sidebar__hash">#</span>
							<p>{item.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
