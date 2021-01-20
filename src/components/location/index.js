import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                    
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53118.10551616319!2d-116.18242531317163!3d33.686129980626205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80da588e87ce3caf%3A0xfd521c797b97bcf8!2sCoachella%2C%20CA!5e0!3m2!1sen!2sus!4v1611184158741!5m2!1sen!2sus"
                    
                

                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                title="myframe"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
