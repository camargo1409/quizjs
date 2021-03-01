const conn = require('../database/connection')

module.exports = {
    async index(req,res){
        try {
            const questions = await conn('question')
            for (const key in questions) {
                const alternatives = await conn('alternative').where('question_id',questions[key].id).select('alternative.id','alternative.text')
                questions[key]["alternatives"] = alternatives
            }
            return res.json(questions)
            
        } catch (error) {
            return res.json(error)
        }
    },
    async create(req,res){
        const {statement,alternatives} = req.body
        
        try {
            await conn.transaction(async trx =>{
                const question = await trx('question').insert({statement})
                
                for (const key in alternatives) {
                    alternatives[key]["question_id"] = question[0]
                }
    
                const alternative = await trx('alternative').insert(alternatives)

            })
            return res.status(200).send()
        } catch (error) {
            console.log(error);
        }
                
    }
}