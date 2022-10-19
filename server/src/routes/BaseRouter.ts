import { Router } from "express";

abstract class BaseRoutes {

  private _router: Router;

  constructor() {
    this._router = Router({
      strict: true
    });
  }


  get router(): Router {
    return this._router
  }

  protected abstract handleRoutes(): void
}

export default BaseRoutes;
