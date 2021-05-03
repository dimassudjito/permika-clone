import React from 'react';

const Executive = ({exec}) => {
    return <main>
        {exec.map((person)=>{
            const {title, img, desc} = person;
            return <article>
                <img className="m-5" src={img}/>
                <h3 className="m-5">{title}</h3>
                <p className="m-5 mx-auto" style={{width:"800px"}}>{desc}</p>
            </article>
        })}
    </main>
};

export default Executive;