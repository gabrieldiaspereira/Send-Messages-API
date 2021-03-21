const Message = require('../../models/Message');
class MensagemRepository {

    async create(data) {
        const mensagem = await Message.create({
            from: data.from,
            target_id: data.target_id,
            message_status: true,
            media: data.media,
            message: data.message
        });
        return mensagem;
    }

    async findAll() {
        const messages = await Message.findAll();
        return messages;
    }

    async findByMessage(data) {
        const messages = await Message.findAll({ where: { message: data } });
        if (!messages || messages == "") {
            return '';
        } else {
        return messages;
        }
    }

}

module.exports = new MensagemRepository();
