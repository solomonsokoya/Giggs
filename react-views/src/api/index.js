export const registerEmployer = async (attempt) => {
  console.log(attempt);
  try {
        let promise = await fetch('/employers/register', {
          method: 'POST',
          body: JSON.stringify(attempt),
          headers: {
            'content-type': 'application/json'
                }
              });
        let json = await promise.json();
        console.log(json);

      }
  catch (err) {
    console.log(err);
  }
};
