const User = require('../models').User;
const Divisi = require('../models').Divisi;
const Project = require('../models').Project;

module.exports = {
    list(req, res) {
        return Divisi.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((divisis) => res.status(200).send(divisis))
        .catch((error) => {
            res.status(500).send(error)
        });
    },

    getById(req, res) {
        return Divisi.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'users'
                },
                {
                    model: Project,
                    as: 'projects'
                }
            ]
        })
        .then((divisi) => {
            if (!divisi) {
                return res.status(404).send({
                    message: 'Divisi Not Found'
                })
            }
            return res.status(200).send(divisi);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    add(req, res) {
        return Divisi.create({
            id: req.body.id,
            nama: req.body.nama,
            kepala_divisi: req.body.kepala_divisi,
            deskripsi: req.body.deskripsi
        })
            .then((divisi) => res.status(201).send(divisi))
            .catch((error) => {
                res.status(500).send(error)
            });
    },

    update(req, res) {
        return Divisi.findByPk(req.params.id)
            .then((divisi) => {
                if (!divisi) {
                    return res.status(404).send({
                        message: 'Divisi Not Found'
                    })
                }
                return divisi.update({
                    nama: req.body.nama,
                    kepala_divisi: req.body.kepala_divisi,
                    deskripsi: req.body.deskripsi
                })
                    .then((divisi) => res.status(200).send(divisi))
                    .catch((error) => {
                        res.status(500).send(error)
                    })
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    },

    delete(req, res) {
        return Divisi.findByPk(req.params.id)
            .then((divisi) => {
                if (!divisi) {
                    return res.status(404).send({
                        message: 'Divisi Not Found'
                    })
                }
                return divisi.destroy()
                    .then(() => res.status(204).send({
                        message: "Divisi is deleted"
                    }))
                    .catch((error) => {
                        res.status(400).send(error)
                    })
            })
            .catch((error) => {
                res.status(200).send(error)
            })
    }
}