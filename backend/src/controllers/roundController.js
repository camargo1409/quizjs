const conn = require('../database/connection')

module.exports = {
    async index(req,res){
        const rounds = await conn('round').orderBy("score","desc")
        return res.json(rounds)
    },
    async create(req,res){
        const {username} = req.body

        try {
            await conn.transaction(async trx =>{

                const round = await trx('round').insert({username})

                const questions = await trx.raw("SELECT question.id FROM question ORDER BY RAND() LIMIT 5")
                
               
                for (const key in questions[0]) {
                    questions[0][key]["round_id"] = round[0]
                    questions[0][key]["question_id"] = questions[0][key]["id"] 
                    delete questions[0][key]["id"]
                }

                const roundQuestions = await trx('round_question').insert(questions[0])
                return res.status(200).json(round[0])
            })
        } catch (error) {
            return res.status(400).json(error)
        }
    }
     
}