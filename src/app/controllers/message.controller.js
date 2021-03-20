const MensagemRepository = require('../repository/MessageRepository');

class MensagemController {
    store(req, res) {
        const { from, target_id, media, message } = req.body;
        const msg = MensagemRepository.create(req.body);
        res.send(msg);
    }
    index(req, res) {
        const msg = MensagemRepository.findAll();
        res.send(msg);
    }
    showForMessage(req, res) {
        const { message } = req.body;
        const msg = MensagemRepository.findByMessage(message);
        res.send(msg);
    }
    showForFrom(req, res) {
        const { from } = req.body;
        const msg = MensagemRepository.findByFrom(from);
        res.send(msg);
    }
}

module.exports = new MensagemController();
