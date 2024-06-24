import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IdeasList = () => {
    const [ideas, setIdeas] = useState([]);
    const [hackathonIdeas, setHackathonIdeas] = useState([]);
    const [regularIdeas, setRegularIdeas] = useState([]);
    axios.defaults.withCredentials = true;
    async function func() {
        let resObj = await axios.get('https://fp-two.vercel.app/admin-api/explore')
        if (resObj != null) {
            setIdeas(resObj.data.data.ideas)
        }
        else {
            console.log("Error")
        }
    }

    useEffect(() => {
        func()
    }, []);

    return (
        <div className="container">
            <h1 className="mt-5 mb-4">Ideas for Innovation</h1>

            {/* Hackathon Ideas Section */}
            <section className="mb-5">
                <h2 className="mb-3">Hackathon Winner Ideas</h2>
                <div className="row">
                    {ideas.map((idea, index) => {
                        if (idea.h) {
                            return (<div key={index} className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{idea.title}</h5>
                                        <p className="card-text"><strong>Domain:</strong> {idea.domain}</p>
                                        <p className="card-text"><strong>Abstract:</strong> {idea.abstract}</p>
                                        <h6 className="mt-3">Useful Features:</h6>
                                        <ul className="list-unstyled">
                                            {idea.useful_features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                        <h6 className="mt-3">Possible Implementations:</h6>
                                        <ul className="list-unstyled">
                                            {idea.possible_implementations.map((implementation, idx) => (
                                                <li key={idx}>{implementation}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>)
                        }
                    })}
                </div>
            </section>

            {/* Regular Ideas Section */}
            <section>
                <h2 className="mb-3">Regular Ideas</h2>
                <div className="row">
                    {ideas.map((idea, index) => {
                        if (!idea.h) {
                            return (<div key={index} className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{idea.title}</h5>
                                        <p className="card-text"><strong>Domain:</strong> {idea.domain}</p>
                                        <p className="card-text"><strong>Abstract:</strong> {idea.abstract}</p>
                                        <h6 className="mt-3">Useful Features:</h6>
                                        <ul className="list-unstyled">
                                            {idea.useful_features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                        <h6 className="mt-3">Possible Implementations:</h6>
                                        <ul className="list-unstyled">
                                            {idea.possible_implementations.map((implementation, idx) => (
                                                <li key={idx}>{implementation}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>)
                        }
                    })}
                </div>
            </section>
        </div>
    );
};

export default IdeasList;
