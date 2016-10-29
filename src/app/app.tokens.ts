import {OpaqueToken} from "@angular/core";

//Makes sure that the value of apiEndpoint is never overwritten by other libraries using variables with the same name
export const API_ENDPOINT =  new OpaqueToken('apiEndpoint');
export const CONFIRM_NAVIGATION_GUARD =  new OpaqueToken('confirmNavigationGuard');
