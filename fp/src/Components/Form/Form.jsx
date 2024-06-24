import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const Form = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const [objectType, setObjectType] = useState('');
    const [subCategory, setSubCategory] = useState('');
    let [f,setF]=useState("")

    async function onSubmit(data){
        console.log(data);
        let {objectType,subCategory,...obj}=data
        let resObj=await axios.post(`http://localhost:4000/admin-api/${objectType}/${subCategory}`,obj)
        if(resObj!=null && resObj.data.message=="Success"){
            setF("Record updated successfully")
        }
        else{
            setF("Error occurres try again")
        }
        reset();
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-md-center">
                <div className="col-sm-10 col-md-8 col-lg-6 bg-light border border-1 rounded-3 p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='mb-3'>Form to upload data</h3>
                        <div className="form-group">
                            <label className='mb-1' htmlFor="objectType">Object Type</label>
                            <select
                                id="objectType"
                                className="form-control"
                                {...register("objectType", { required: true })}
                                onChange={(e) => setObjectType(e.target.value)}
                            >
                                <option value="">Select...</option>
                                <option value="hackathon">Hackathon</option>
                                <option value="explore">Explore</option>
                            </select>
                        </div>

                        {objectType && (
                            <div className="form-group mt-3">
                                <label className='mb-1' htmlFor="subCategory">Sub Category</label>
                                <select
                                    id="subCategory"
                                    className="form-control"
                                    {...register("subCategory", { required: true })}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    {objectType === 'hackathon' && (
                                        <>
                                            <option value="past">Past</option>
                                            <option value="current">Current</option>
                                            <option value="upcoming">Upcoming</option>
                                        </>
                                    )}
                                    {objectType === 'explore' && (
                                        <>
                                            <option value="ideas">Ideas</option>
                                            <option value="alumini">Alumni</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        )}
                        {objectType && subCategory && (
                            <div className="mt-3">
                                <div className="form-group">
                                    <label className='mb-1' htmlFor="name">{objectType === 'hackathon' ? 'Event Name' : 'Title'}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder={objectType === 'Hackathon' ? 'Event Name' : 'Title'}
                                        {...register("name", { required: true })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='mb-1' htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        placeholder='Date'
                                        className="form-control"
                                        {...register("date", { required: true })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='mb-1' htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder='Location'
                                        className="form-control"
                                        {...register("location", { required: true })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='mb-1' htmlFor="venue">Venue</label>
                                    <input
                                        type="text"
                                        id="venue"
                                        placeholder='Venue'
                                        className="form-control"
                                        {...register("venue", { required: true })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='mb-1' htmlFor="type">Type</label>
                                    <input
                                        type="text"
                                        id="type"
                                        placeholder='Type'
                                        className="form-control"
                                        {...register("type", { required: true })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='mb-1' htmlFor="website">Website</label>
                                    <input
                                        type="url"
                                        id="website"
                                        className="form-control"
                                        placeholder='Website'
                                        {...register("website", { required: true })}
                                    />
                                </div>
                                {objectType === 'hackathon' && (
                                    <div className="form-group mt-3">
                                        <label className='mb-1' htmlFor="prizePool">Prize Pool</label>
                                        <input
                                            type="text"
                                            id="prizePool"
                                            className="form-control"
                                            placeholder='Prize Pool'
                                            {...register("prizePool", { required: false })}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                        <button type="submit" className="btn btn-success mt-4 d-block mx-auto">Submit</button>
                    </form>
                    <p>{f}</p>
                </div>
            </div>
        </div>
    );
};

export default Form;
