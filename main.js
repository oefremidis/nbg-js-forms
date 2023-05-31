const form = document.getElementById("jobForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  const url = 'https://reqres.in/api/users'; 
  fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;encoding:utf-8'
    },
    body: formData
  }).then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));
});


// -----------------------------------------------
// discusion on gettinf form values
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
  
//     const formData = new FormData(form);
//     // console.log(formData);
//     // getter
//     console.log(formData.get("job"));
  
//     // console.log(formData.values());
//     for (const item of formData.values()) {
//       console.log(item);
//     }
  
//     console.log(formData.entries());
//     console.log([...formData.entries()]);
  
//   //   const {fname, job} = {'fname': 1, 'job': 2}; 
//   //   const {a: fname, b: job} = {'a': 1, 'b': 2}; 
  
//   //   const {
//   //     fname: { value: fname}, 
//   //     job: { value: job}
//   // } = form;
//   //   console.log(fname, job)
// });
  
    