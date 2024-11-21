import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_URL,
    });
  }

  
}