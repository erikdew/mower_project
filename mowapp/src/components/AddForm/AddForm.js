import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:3005'

class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: '',
            endDate: ''
        }
    }
    handleStartDate = (e) => {
        this.setState({ image_url: e.target.value })
    }

    handleEndDate = (e) => {
        this.setState({ name: e.target.value })
    }

    addJob = (job) => {
        axios.post(BASE_URL + '/lawn', { ...job }).then(res => {
            this.setState({ job: res.data }); this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className='Form-container'>

                <label>Start Date</label><input value={this.state.startDate} onChange={this.handleStartDate} />
                <label>End Date</label><input value={this.state.endDate} onChange={this.handleEndDate} />
                <button
                    onClick={() => this.addJob(this.state)}
                >Add Job
                </button>
                <div className='Header-buttons'>PAY NOW</div>


            </div>
        )
    }
}
export default AddForm;