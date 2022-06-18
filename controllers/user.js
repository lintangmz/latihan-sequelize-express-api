const User = require('../models').User;

module.exports = {
    list(req, res) {
        return User.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
            .then((users) => res.status(200).send(users))
            .catch((error) => {
                res.status(500).send(error)
            });
    },

    getById(req, res) {
        return User.findByPk(req.params.id, {
            include: []
        })
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found'
                    })
                }
                return res.status(200).send(user);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    add(req, res) {
        if (!req.body.divisi_id) {
            return res.status(400).send(
                {
                    error_code: "400",
                    message: "divisi id must be filled"
                }
            )
        }

        return User.create({
            nama: req.body.nama,
            nik: req.body.nik,
            divisi_id: req.body.divisi_id
        })
            .then((user) => res.status(201).send(user))
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    update(req, res) {
        return User.findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found'
                    })
                }
                return user.update({
                    nama: req.body.nama,
                    nik: req.body.nik,
                    divisi_id: req.body.divisi_id
                })
                    .then(() => res.status(200).send(user))
                    .catch((error) => {
                        res.status(400).send(error);
                    });
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    delete(req, res) {
        return User.findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found'
                    })
                }
                return user.destroy()
                    .then(() => res.status(204).send({ message: "User is deleted" }))
                    .catch((error) => {
                        res.status(400).send(error);
                    });
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    }
}