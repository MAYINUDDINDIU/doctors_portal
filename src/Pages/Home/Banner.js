import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (

        <div className="hero py-16 container-fluid ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair}className="max-w-sm w-100 rounded-lg shadow-xl" />
                <div>
                    <h1 className="text-4xl font-bold text-left">Your New Smile Starts Here</h1>
                    <p className="py-6 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                   <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;