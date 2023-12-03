import express, { Request, Response } from 'express';
import connectSocket from './socket';

const PORT = 4000;
const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req: Request, res: Response) => res.send('<h1>Hello World 🚀</h1>'));
app.get('/*', (req, res) => res.redirect('/'));

const server = app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

connectSocket(server);
