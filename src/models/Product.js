//criação de schema
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const ProductSchema = new mongoose.Schema({
    //passar os campos pra tabela(schema)
    title: {
        type: String,
        required: true        
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

ProductSchema.plugin(mongoosePaginate)//paginação p n precisar retornar td de uma vez

mongoose.model('Product', ProductSchema)