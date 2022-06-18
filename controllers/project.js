const Project = require('../models').Project;
const Divisi = require('../models').Divisi;

module.exports = {
    list(req, res) {
        return Project.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
            .then((projects) => res.status(200).send(projects))
            .catch((error) => {
                res.status(500).send(error)
            });
    },

    getById(req, res) {
        return Project
            .findByPk(req.params.id, {
                include: [{
                    model: Divisi,
                    as: 'divisis'
                }],
            })
            .then((project) => {
                if (!project) {
                    return res.status(404).send({
                        message: 'Project Not Found',
                    });
                }
                return res.status(200).send(project);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Project.create({
            id: req.body.id,
            nama: req.body.nama,
            durasi: req.body.durasi,
            deskripsi: req.body.deskripsi
        })
            .then((project) => res.status(200).send(project))
            .catch((error) => res.status(500).send(error))
    },

    update(req, res) {
        return Project
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'Project Not Found',
                    });
                }
                return project
                    .update({
                        nama: req.body.nama,
                        durasi: req.body.durasi,
                        deskripsi: req.body.deskripsi
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Project
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'Project Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}