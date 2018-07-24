export class Api {

  constructor(userinfo) {
    this.userinfo = userinfo;

    this.registerEmployer = async (attempt) => {
      console.log('this is an attempt' + attempt);
      try {
        let promise = await fetch('/employers/register', {
          method: 'POST',
          body: JSON.stringify(attempt),
          headers: {
            'content-type': 'application/json'
          }
        });
        let json = await promise.json();
        return this.userinfo(json);

      } catch (err) {
        console.log(err);
      }
    };
  }
}
