import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    _id: Number,
    file_name: {
        type: String,
    },
    url: {
        type: String,
        required: true
    },
});

export default mongoose.models.File || mongoose.model('File', fileSchema);