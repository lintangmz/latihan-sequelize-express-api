const ProjectDivisi = require('../models').ProjectDivisi;

module.exports = {
    list(req, res) {
        return ProjectDivisi.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((projectDivisi) => res.status(200).send(projectDivisi))
        .catch((error) => {
            res.status(500).send(error)
        });
    },

    getById(req, res) {
        return ProjectDivisi
            .findByPk(req.params.id, {
                include: [],
            })
            .then((projectDivisi) => {
                if (!projectDivisi) {
                    return res.status(404).send({
                        message: 'ProjectDivisi Not Found',
                    });
                }
                return res.status(200).send(projectDivisi);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return ProjectDivisi.create({
            project_id: req.body.project_id,
            divisi_id: req.body.divisi_id
        })
        .then((project) => res.status(200).send(project))
        .catch((error) => res.status(500).send(error)) 
    },

    update(req, res) {
        return ProjectDivisi
            .findByPk(req.params.id)
            .then(projectDivisi => {
                if (!projectDivisi) {
                    return res.status(404).send({
                        message: 'ProjectDivisi Not Found',
                    });
                }
                return projectDivisi.update({
                        project_id: req.body.project_id,
                        divisi_id: req.body.divisi_id
                    })
                    .then(() => res.status(200).send(projectDivisi))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return ProjectDivisi
            .findByPk(req.params.id)
            .then(projectDivisi => {
                if (!projectDivisi) {
                    return res.status(400).send({
                        message: 'ProjectDivisi Not Found',
                    });
                }
                return projectDivisi
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}