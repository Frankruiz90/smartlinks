import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { DataSharingService } from "../services/data-sharing.service";

@Injectable({
  providedIn: "root",
})
export class AdminRolGuard implements CanActivate {
  public permissionGroup: Array<String> = [];
  constructor(
    private _router: Router,
    private _dataSharingService: DataSharingService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.permissionGroup.includes("admin_group")) {
      return true;
    }
    this._router.navigate(["/home"]);
    return false;
  }
}