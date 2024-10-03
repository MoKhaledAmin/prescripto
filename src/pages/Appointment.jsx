import React, { useContext, useEffect, useState } from 'react';

// React Router
import { useParams } from 'react-router-dom';

// Context
import { AppContext } from './../context/AppContext';

// Assets
import { assets } from '../assets/assets';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors } = useContext(AppContext);
    const [doctorInfo, setDoctorInfo] = useState(null);

    // Fetch Doctor Information
    const fetchDoctorInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId);
        setDoctorInfo(docInfo);
        console.log(docInfo);
    }

    // Load Doctor Data
    useEffect(() => {
        fetchDoctorInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [doctors, docId]);

    return doctorInfo && (
        <React.Fragment>
            <div>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div>
                        <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={doctorInfo.image} alt='' />
                    </div>
                    <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{doctorInfo.name} <img className='w-5' src={assets.verified_icon} alt='Verified' /></p>
                        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                            <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
                            <button className='py-0.5 px-2 border text-xs rounded-full'>{doctorInfo.experience}</button>
                        </div>
                        <div>
                            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt='Info' /></p>
                            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{doctorInfo.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Appointment;