import React from "react";
import "./App.css";

function App() {
const user = {
name: "Habib Moalla",
jobTitle: "Rajel",
about:
"Passionate about web development and creating awesome user experiences.",
email: "alaa.odc@example.com",
phone: "+123 456 7890",
skills: ["HTML", "CSS", "JavaScript", "React"],
photoURL:
"https://media.licdn.com/dms/image/C5603AQGag1S8XilNIw/profile-displayphoto-shrink_800_800/0/1516962706305?e=2147483647&v=beta&t=OBuy8ZLcMF5YWdaqYZq2Y1kK6zQKBYHedZP4NF0PkG8", // Replace with your photo URL
};

return (
<div className="App">
<header className="App-header">
<img src={user.photoURL} alt="Profile" />
<h1>{user.name}</h1>
<p>{user.jobTitle}</p>
</header>

<section className="App-content">
<h2>About Me</h2>
<p>{user.about}</p>

<h2>Contact Information</h2>
<ul>
<li>Email: {user.email}</li>
<li>Phone: {user.phone}</li>
</ul>

<h2>Skills</h2>
<ul>
{user.skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
</section>
</div>
);
}

export default App;