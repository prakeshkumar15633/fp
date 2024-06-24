import React, { useEffect, useState } from 'react';
import axios from 'axios'

const PastHackathons = () => {
    const [hackathons, setHackathons] = useState({ past: [] });

    async function func(){
        let resObj=await axios.get('https://fp-two.vercel.app/admin-api/hackathon')
        if(resObj!=null){
            setHackathons(resObj.data.data)
        }
        else{
            console.log("Error")
        }
    }
    useEffect(() => {
        // fetch('http://localhost:5000/hackathons')
        //   .then(response => response.json())
        //   .then(data => setHackathons(data))
        //   .catch(error => console.error('Error fetching past hackathons:', error));
        func()
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Past Hackathons</h2>
            {hackathons.past.map((hackathon, index) => (
                <div key={index} className="card mb-4 shadow-sm animated fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="card-body">
                        <h3 className="card-title">{hackathon.name}</h3>
                        <p className="card-text"><strong>Date:</strong> {hackathon.date}</p>
                        <p className="card-text"><strong>Location:</strong> {hackathon.location}</p>
                        <p className="card-text"><strong>Venue:</strong> {hackathon.venue}</p>
                        <p className="card-text">
                            <strong>Website:</strong>
                            <a href={hackathon.website} target="_blank" rel="noopener noreferrer"> {hackathon.website}</a>
                        </p>
                        <h4 className="mt-4">Winners:</h4>
                        <ul className="list-group">
                            {hackathon.winners.map((winner, idx) => (
                                <li key={idx} className="list-group-item">
                                    <p><strong>Team:</strong> {winner.team_name}</p>
                                    <p><strong>Project:</strong> {winner.project_name}</p>
                                    <p><strong>Idea:</strong> {winner.idea}</p>
                                    <p><strong>Members:</strong> {winner.members.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PastHackathons;
