const MensagemRepository = require('../repository/MessageRepository');

class MensagemController {

    async store(req, res) {
        const { from, target_id, media, message } = req.body;
        if (!from || !target_id) {
            res.status(404).json({ error: "from or target_id not found" });
        }
        else if(from == "" || target_id == "") {
            res.status(404).json({ error: "from and target_id cannot be empty" });
        }else{
            const msg = await MensagemRepository.create(req.body);
            res.status(200).json({ msg });
        }
    }

    async index(req, res) {
        const { message } = req.params;
        if (message === undefined){
            const msg = await MensagemRepository.findAll();
            res.status(200).json({ msg });
        }
        else if (req.params){
            const { message } = req.params;
            const msg = await MensagemRepository.findByMessage(message);
            if (!msg){
                res.status(404).json({ error: "Message not found" });
            }else{
                res.status(200).json({ msg });
            }
        }
    }

}

module.exports = new MensagemController();
