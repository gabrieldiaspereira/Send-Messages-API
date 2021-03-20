class MensagemRepository {
    create(data) {
        return(data);
    }
    findAll() {
        return([
            {
                "from": "5531997469133",
                "target_id": "553196131764",
                "media": "false",
                "message": "mensagem aqui"
            }
        ]);
    }
    findByMessage(data) {
        return([
            {
                "from": "5531997469133",
                "target_id": "553196131764",
                "media": "false",
                "message": "mensagem aqui"
            }
        ]);
    }
    findByFrom(data) {
        return([
            {
                "from": "5531997469133",
                "target_id": "553196131764",
                "media": "false",
                "message": "mensagem aqui"
            }
        ]);
    }
}

module.exports = new MensagemRepository();
