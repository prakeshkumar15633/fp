// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AlumniData = () => {
//     const [alumniData, setAlumniData] = useState({ alumini: [] });
//     const [filteredData, setFilteredData] = useState({ alumini: [] });


//     const [branch, setBranch] = useState('');
//     const [year, setYear] = useState('');
//     const [domain, setDomain] = useState('');



//     useEffect(() => {
//         func()
//     }, []);


//     useEffect(() => {
//         let filtered = alumniData.alumini;

//         if (branch) {
//             filtered = filtered.filter(alumnus => alumnus.branch === branch);
//         }

//         if (year) {
//             filtered = filtered.filter(alumnus => alumnus.batch_year === parseInt(year));
//         }

//         if (domain) {
//             filtered = filtered.filter(alumnus => alumnus.domain === domain);
//         }

//         setFilteredData({ alumini: filtered });
//     }, [branch, year, domain, alumniData]);

//     return (
//         <div className="m-3">
//             <h1 className="mt-5 mb-4">Alumni Data</h1>


//             <div className="mb-4 row">
//                 <div className="col-md-4 mb-3">
//                     <label className="w-100">

//                         <select value={branch} onChange={(e) => setBranch(e.target.value)} className="form-control mt-2">
//                             <option value=''>All Branches</option>

//                             <option value='Computer Science'>Computer Science</option>
//                             <option value='Electrical Engineering'>Electrical Engineering</option>
//                             <option value='Mechanical Engineering'>Mechanical Engineering</option>
//                             <option value='Biomedical Engineering'>Biomedical Engineering</option>
//                         </select>
//                     </label>
//                 </div>

//                 <div className="col-md-4 mb-3">
//                     <label className="w-100">

//                         <select value={year} onChange={(e) => setYear(e.target.value)} className="form-control mt-2">
//                             <option value=''>All Years</option>

//                             <option value='2016'>2016</option>
//                             <option value='2017'>2017</option>
//                             <option value='2018'>2018</option>
//                             <option value='2019'>2019</option>
//                         </select>
//                     </label>
//                 </div>

//                 <div className="col-md-4 mb-3">
//                     <label className="w-100">

//                         <select value={domain} onChange={(e) => setDomain(e.target.value)} className="form-control mt-2">
//                             <option value=''>All Domains</option>

//                             <option value='Environmental Technology'>Environmental Technology</option>
//                             <option value='Virtual Reality (VR)'>Virtual Reality (VR)</option>
//                             <option value='Education Technology'>Education Technology</option>
//                             <option value='Healthcare Technology'>Healthcare Technology</option>
//                         </select>
//                     </label>
//                 </div>
//             </div>

//             <div className="row">
//                 {filteredData.alumini.map((alumni, index) => (
//                     <div key={index} className="col-md-6 mb-4">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">{alumni.name}</h5>
//                                 <p className=""><strong>Startup:</strong> {alumni.startup_name}</p>
//                                 <p className=""><strong>Branch:</strong> {alumni.branch}</p>
//                                 <p className=""><strong>Batch Year:</strong> {alumni.batch_year}</p>
//                                 <p className=""><strong>Domain:</strong> {alumni.domain}</p>
//                                 <p className=""><strong>Idea Abstract:</strong> {alumni.idea_abstract}</p>
//                                 <p className=""><strong>Partners:</strong> {alumni.partners.join(', ')}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AlumniData;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlumniData = () => {
    const [alumniData, setAlumniData] = useState({ alumini: [] });
    const [filteredData, setFilteredData] = useState({ alumini: [] });
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [domain, setDomain] = useState('');
    const [uniqueYears, setUniqueYears] = useState([]);
    const [uniqueBranches, setUniqueBranches] = useState([]);
    const [uniqueDomains, setUniqueDomains] = useState([]);

    async function func() {
        let resObj = await axios.get('https://fp-two.vercel.app/admin-api/explore')
        if (resObj != null) {
            setAlumniData(resObj.data.data);
            setFilteredData(resObj.data.data);
            const years = [...new Set(resObj.data.data.alumini.map(alumnus => alumnus.batch_year))].sort((a, b) => a - b);
            const branches = [...new Set(resObj.data.data.alumini.map(alumnus => alumnus.branch))].sort();
            const domains = [...new Set(resObj.data.data.alumini.map(alumnus => alumnus.domain))].sort();
            setUniqueYears(years);
            setUniqueBranches(branches);
            setUniqueDomains(domains);
        }
        else {
            console.log("Error")
        }
    }

    useEffect(() => {
        func()
    }, []);

    useEffect(() => {
        let filtered = alumniData.alumini;

        if (branch) {
            filtered = filtered.filter(alumnus => alumnus.branch === branch);
        }

        if (year) {
            filtered = filtered.filter(alumnus => alumnus.batch_year === parseInt(year));
        }

        if (domain) {
            filtered = filtered.filter(alumnus => alumnus.domain === domain);
        }

        setFilteredData({ alumini: filtered });
    }, [branch, year, domain, alumniData]);

    return (
        <div className="container">
            <h1 className="mt-5 mb-4">Alumni Data</h1>

            <div className="mb-4 row">
                <div className="col-md-4 mb-3">
                    <label className="w-100">
                        <select value={branch} onChange={(e) => setBranch(e.target.value)} className="form-control mt-2">
                            <option value=''>All Branches</option>
                            {uniqueBranches.map((uniqueBranch, index) => (
                                <option key={index} value={uniqueBranch}>{uniqueBranch}</option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="col-md-4 mb-3">
                    <label className="w-100">
                        <select value={year} onChange={(e) => setYear(e.target.value)} className="form-control mt-2">
                            <option value=''>All Years</option>
                            {uniqueYears.map((uniqueYear, index) => (
                                <option key={index} value={uniqueYear}>{uniqueYear}</option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="col-md-4 mb-3">
                    <label className="w-100">
                        <select value={domain} onChange={(e) => setDomain(e.target.value)} className="form-control mt-2">
                            <option value=''>All Domains</option>
                            {uniqueDomains.map((uniqueDomain, index) => (
                                <option key={index} value={uniqueDomain}>{uniqueDomain}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            <div className="row">
                {filteredData.alumini.map((alumni, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{alumni.name}</h5>
                                <p className="card-text"><strong>Startup:</strong> {alumni.startup_name}</p>
                                <p className="card-text"><strong>Branch:</strong> {alumni.branch}</p>
                                <p className="card-text"><strong>Batch Year:</strong> {alumni.batch_year}</p>
                                <p className="card-text"><strong>Domain:</strong> {alumni.domain}</p>
                                <p className="card-text"><strong>Idea Abstract:</strong> {alumni.idea_abstract}</p>
                                <p className="card-text"><strong>Partners:</strong> {alumni.partners.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlumniData;