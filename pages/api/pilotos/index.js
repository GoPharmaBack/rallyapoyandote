import Piloto from 'models/piloto.models';
import { dbConnect } from 'config/mongoose';
dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'GET':
      try {
        console.log(req.method, req.url);
        const pilotos = await Piloto.find().sort({points:-1});
        res.status(200).json(pilotos);
      } catch (error) {
        console.log(error);
      }

      break;
    case 'POST':
      try {
        console.log(body);
        const NewPiloto = new Piloto(body);
        const SavedPiloto = await NewPiloto.save();
        res.status(200).json(SavedPiloto, 'Registrando Piloto');
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
