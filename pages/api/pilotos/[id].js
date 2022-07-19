import { dbConnect } from 'config/mongoose';
import PilotoModel from 'models/piloto.models';

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const PilotoModelId = await PilotoModel.findById(id);
        if (!PilotoModelId)
          return res
            .status(404)
            .json({ get_msg: 'PilotoModel does not exists' });
        return res.status(200).json(PilotoModelId);
      } catch (error) {
        return res.status(400).json({ get_msg: error.message });
      }
    case 'PUT':
      try {
        const PilotoModelUp = await PilotoModel.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!PilotoModelUp)
          return res
            .status(404)
            .json({ put_msg: 'PilotoModelUp does not exists' });
        return res.status(200).json(PilotoModelUp);
      } catch (error) {
        return res.status(400).json({ put_msg: error.message });
      }
    case 'DELETE':
      try {
        const deletedPilotoModel = await PilotoModel.findByIdAndDelete(id);
        if (!deletedPilotoModel)
          return res.status(404).json({ msg: 'PilotoModel does not exists' });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
}
