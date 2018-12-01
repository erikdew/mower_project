import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import JobMap from '../JobMap/JobMap';

// import GoogleMap from '../GoogleMap/GoogleMap';

import AddForm from '../AddForm/AddForm'

const BASE_URL = 'http://localhost:3005'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lawns: []

        }

    }

    componentDidMount() {
        axios.get(BASE_URL + '/lawns').then(res => {
            this.setState({ lawns: res.data })
        })
    }

    render() {
        const lawnsToDisplay = this.state.lawns.map(lawn => {
            return (


                <JobMap lawn={lawn} key={lawn.id} />

            )
        })
        return (
            <div className='Add-form'>
                <AddForm />
                <div className='Find-job'>
                    {lawnsToDisplay}
                </div>

            </div>
        )
    }
}

export default Dashboard;