import { connect, connection } from 'mongoose';

async function dbConnect() {
  await connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
