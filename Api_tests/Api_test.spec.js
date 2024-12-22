const {test , expect} = require ('@playwright/test');
const { request } = require('http');

let userId;

test("Get endpoint", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    console.log(await response.json());
})


test("Post endpoint", async({request}) => {

const response = await request.post("https://reqres.in/api/users", 
{  
data:{"name":"Micki","job": "Actor"},
headers: {"Accept" : "application/json"}
    })
expect(response.status()).toBe(201);    
console.log(await response.json());

let res  = await response.json();
userId = res.id;

})


test("Put endpoint", async ({request}) => {

    const response =  await request.put("https://reqres.in/api/users/"+userId ,
{
data:{"name":"Micki","job": "Barber"},
headers: {"Accept" : "application/json"}
})

expect(response.status()).toBe(200);    
console.log(await response.json());
    })


test("Delete endpoint", async({request}) => {
    const response = await request.delete("https://reqres.in/api/users/"+userId)
    expect(response.status()).toBe(204);    
    // console.log(await response.json());
})