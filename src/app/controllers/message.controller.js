const MensagemRepository = require('../repository/MessageRepository');

class MensagemController {

    async store(req, res) {
        const { from, target_id, media, message } = req.body;
        if(!from || !target_id) {
            res.status(404).json({ error: "from or target_id not found" });
        }
        if(from == "" || target_id == "") {
            res.status(400).json({ error: "from and target_id cannot be empty" });
        }
        const msg = await MensagemRepository.create(req.body);
        res.status(200).json({ msg });
    }

    async index(req, res) {
        const msg = await MensagemRepository.findAll();
            res.status(200).json({ msg });
    }

    async showForMessage(req, res) {
        const { message } = req.params;
        const msg = await MensagemRepository.findByMessage(message);
        if (!msg){
            res.status(404).json({ error: "Message not found" });
        }
            res.status(200).json({ msg });
    }

    async showForFrom(req, res) {
        const { from } = req.params;
        const msg = await MensagemRepository.findByFrom(from);
        if (!msg){
            res.status(404).json({ error: "Message not found" });
        }
            res.status(200).json({ msg });
    }

    async showForTargetId(req, res) {
        const { target_id } = req.params;
        const msg = await MensagemRepository.findByTargetId(target_id);
        if (!msg){
            res.status(404).json({ error: "Message not found" });
        }
            res.status(200).json({ msg });
    }
}

module.exports = new MensagemController();
