import React from 'react';
import { Link } from 'react-router-dom';

const JobMap = (props) => {
    const { lawn } = props;
    return (
        <div>
            <div className='Lawn'>
                <Link to='/lawn'>Select Lawn</Link>
                <p>{lawn.address}</p>
                <p>{lawn.startDate}</p>
                <p>{lawn.endDate}</p>

            </div>
        </div>
    )
}
export default JobMap;