import { Schema, model, models } from 'mongoose';

const PilotoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The Piloto name is required '],
      unique: true,
      trim: true,
    },
    number: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    team: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    points: {
      type: Number,
      required: true,
      trim: true,
    },
    carImage: {
      type: String,
      required: true,
      trim: true,
    },
    bgcolor: {
      type: String,
      required: true,
      trim: true,
    },
    totalPacientes: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.PilotoModel || model('PilotoModel', PilotoSchema);
