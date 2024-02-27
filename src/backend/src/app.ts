import express from 'express';
import router from './router/index';
// import supabase from './config/supabaseClient';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    // this.config();
    this.app.use(express.json());
    this.routes();
  }

  // private config():void {
  //     const accessControl: express.RequestHandler = (_req, res, next) => {
  //     res.header('Access-Control-Allow-Origin', 'https://recipes-web-vercel.vercel.app');
  //     res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  //     res.header('Access-Control-Allow-Headers', '*');
  //     next();
  //   };

  //   this.app.use(accessControl);
  // }

  private routes():void { this.app.use(router); }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
  }
}

export default App;
