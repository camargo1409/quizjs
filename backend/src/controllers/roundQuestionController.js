const conn = require('../database/connection')
module.exports = {
    async show(req,res){
        const {roundId,page} = req.query
        try {
            await conn.transaction(async trx =>{
                const question = await trx('round_question')
                .innerJoin('round','round_question.round_id','round.id')
                .innerJoin('question','round_question.question_id','question.id')
                .where('round_question.round_id',roundId)
                .limit(1).offset(page-1)
                .select('question.id','question.statement')
                
                const alternatives = await trx('alternative').where('alternative.question_id',question[0].id)
                question[0]["alternatives"] = alternatives
                return res.json(question)
            })
        } catch (error) {
            return res.status(400).json(error)
            
        }
        
    }
}