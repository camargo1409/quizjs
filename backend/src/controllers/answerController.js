const conn = require('../database/connection')

module.exports = {
    async create(req,res){
        const {roundId,answer} = req.body;

        const alternative = await conn('alternative').where('alternative.id',answer)

        if (!alternative[0].is_correct) return res.json({"msg":"You missed!"}) 

        const round = await conn('round').where('round.id',roundId)

        await conn('round').where('round.id',roundId).update({
            score:round[0].score+=10
        })

        return res.json({"msg":"You hit!"})
    }
}