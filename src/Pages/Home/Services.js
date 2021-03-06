import React from 'react';
import flouride from'../../assets/images/fluoride.png';
import cavity from'../../assets/images/cavity.png';
import whitening from'../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

const services=[
    {
        _id:1,
        name:"Flouride Treatement",
        description:'',
        img:flouride
    },
    {
        _id:2,
        name:"Cavity Filling",
        description:'',
        img:cavity
    },
    {
        _id:3,
        name:"Teeth Whitening",
        description:'',
        img:whitening
    }


];


    return (
        <div>
              <div className='my-10 mx-12 mb-5'>
            <h3 className='text-primary font-bold uppercase text-xl'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
            {
                services.map(service =><Service key={service._id} service={service}></Service>)
            }
        </div>
        </div>
      
        
    );
};

export default Services;