module.exports = {

    readAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_lawns()
            .then(lawns => {
                res.status(200).send(lawns)
            })
            .catch(error => {
                res.status(500).send(error)
            });
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        let { completed, mower, owner, address, startdate, enddate, starttime, endtime } = req.body;

        dbInstance.create_job([completed, mower, owner, address, startdate, enddate, starttime, endtime])
            .then(newJob => {
                res.status(200).send(newJob)
            })
            .catch(error => {
                res.status(500).send(error)
            })
    },

    createUser: (req, res) => {
        const dbInstance = req.app.get('db');
        let { firstname, lastname, email, password } = req.body;

        dbInstance.create_user([firstname, lastname, email, password])
            .then(newUser => {

                console.log("HEYO NEW USERS SHOULD BE POSTING")
                res.status(200).send(newUser)
            })
            .catch(error => {
                res.status(500).send(error)
            })
    },

    readJob: (req, res) => {
        const dbInstance = req.app.get('db');
        const lawnId = req.params.id;

        dbInstance.get_individual([lawnId])
            .then(lawn => {
                res.status(200).send(lawn[0]);
            })
            .catch(error => {
                res.status(500).send(error)
            });


    },

    //what is going into the job fields?
    updateJob: (req, res) => {
        const dbInstance = req.app.get('db');
        let { address, startTime, endTime } = req.body;
        let lawnid = req.params.id;
        let updatedJob =
        {

            "address": address,
            "startTime": startTime,
            "endTime": endTime
        };

        dbInstance.lawns.update({ "lawnid": lawnid }, updatedJob).then(updatedJobs => {
            res.status(200).send(updatedJobs[0]);
        });
    },

    updateUser: (req, res) => {
        const dbInstance = req.app.get('db');
        let { firstName, lastName, email, password } = req.body;
        let personid = req.params.id;
        let updatedUser =
        {

            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'password': password
        };

        dbInstance.mowapp_users.update({ "personid": personid }, updatedUser).then(updatedUsers => {
            res.status(200).send(updatedUsers[0]);

        })
            .catch(error => {
                res.status(500).send(error)
            });
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const idToDelete = req.params.id;
        dbInstance.remove_job([req.params.id]).then(deletedJob => {
            // this is from read all above
            dbInstance.get_lawns()
                .then(lawns => {
                    res.status(200).send(lawns)
                })
                .catch(error => {
                    res.status(500).send(error)
                });
        });

    },
    deleteUser: (req, res) => {
        const dbInstance = req.app.get('db');
        const idToDelete = req.params.id;
        dbInstance.remove_user([req.params.id]).then(deleteUser => {
            // this is from read all above
            dbInstance.get_lawns()
                .then(lawns => {
                    res.status(200).send(lawns)
                })
                .catch(error => {
                    res.status(500).send(error)
                });
        });

    }




}

