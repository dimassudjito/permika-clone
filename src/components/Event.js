import React from 'react';

const Event = ({events}) => {
    return <main>
        {events.map((item)=>{
            const {title, img, desc} = item;
            return <article>
                <img className="m-5" src={img}/>
                <h3 className="m-5">{title}</h3>
                <p className="m-5 mx-auto" style={{width:"800px"}}>{desc}</p>
            </article>
        })}
    </main>
};

export default Event;