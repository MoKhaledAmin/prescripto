import React, { useContext, useEffect, useState } from 'react';

// Context
import { AppContext } from './../context/AppContext';

// React Router
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const RelatedDoctors = ({ docId, speciality }) => {
    const Navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [ relatedDoc, setRelatedDoc ] = useState([]);

    // Load Related Doctors
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelatedDoc(doctorsData);
        }
    }, [doctors, docId, speciality]);

    return (
        <React.Fragment>
            <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
                <h1 className='text-3xl font-medium'>Related Doctors</h1>
                <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
                <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                    {
                        relatedDoc.slice(0, 5).map((item, index) => (
                            <div onClick={() => {Navigate(`/appointment/${item._id}`); scrollTo(0, 0)}} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                                <img className='bg-blue-50' src={item.image} alt='' />
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                                    </div>
                                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button onClick={() => { Navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
            </div>
        </React.Fragment>
    )
}

export default RelatedDoctors;