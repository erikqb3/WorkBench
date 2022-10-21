export class AuthService {
  loggedIn = false;

  isAuthenticated(){ //fakes that it takes time to finish
    const promise = new Promise( 
      (resolve, reject) => {
        setTimeout(()=>{
          resolve(this.loggedIn);
        }, 400);
      }
    );
    return promise;
  }

  login(){
    this.loggedIn = true;
    // return this.loggedIn;
  }
  
  logout(){
    this.loggedIn = false;
    // return this.loggedIn;
  }
}

