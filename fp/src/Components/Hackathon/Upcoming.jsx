// UpcomingHackathons.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Upcoming = () => {
    const [hackathons, setHackathons] = useState({ upcoming: [] });

    async function func() {
        let resObj = await axios.get('https://fp-two.vercel.app/admin-api/hackathon')
        if (resObj != null) {
            setHackathons(resObj.data.data)
        }
        else {
            console.log("Error")
        }
    }
    useEffect(() => {
        // fetch('http://localhost:5000/hackathons')
        //   .then(response => response.json())
        //   .then(data => setHackathons(data))
        //   .catch(error => console.error('Error fetching upcoming hackathons:', error));
        func()
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Upcoming Hackathons</h2>
            {hackathons.upcoming.map((hackathon, index) => (
                <div key={index} className="card mb-4">
                    <div className="card-body">
                        <h3 className="card-title">{hackathon.name}</h3>
                        <p className="card-text"><strong>Date:</strong> {hackathon.date}</p>
                        <p className="card-text"><strong>Location:</strong> {hackathon.location}</p>
                        <p className="card-text"><strong>Venue:</strong> {hackathon.venue}</p>
                        <p className="card-text"><strong>Prize Pool:</strong> {hackathon.prize_pool}</p>
                        <p className="card-text">
                            <strong>Website:</strong>
                            <a href={hackathon.website} target="_blank" rel="noopener noreferrer"> {hackathon.website}</a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Upcoming;