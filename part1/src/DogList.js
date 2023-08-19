import React from 'react';
import { Link} from 'react-router-dom';

const DogList = ({ dogs }) => {
    return <div className='DogList'>
        {dogs.map((dog, index) =>
            <Link key={`${dog.name}-link-${index}`} to={`/dogs/${dog.name.toLowerCase()}`}>
                <img src={dog.src} alt={dog.name} style={{ width: "200px", margin: "4px", borderRadius: "50%" }} />
            </Link>)}
    </div>;
}

export default DogList;