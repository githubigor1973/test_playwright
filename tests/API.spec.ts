

/*
test('API test POST', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users',{
        data: {
            "name": "igor",
            "surname": "pejin",
            "city": "Osijek",
            "job": "developer"
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
   
    const text = await response.text();
    expect(text).toContain('igor');
    console.log('✅ API response is correct!', await response.json());
});

test('API test PUT', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2',{
        data: {
            "name": "igor",
            "surname": "pejin",
            "city": "Osijek",
            "job": "developer"
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
   
    const text = await response.text();
    expect(text).toContain('igor');
    console.log('✅ API response is correct!', await response.json());
});

test('API test DELETE', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(204);
   

}); */


 /* test('API test GET', async ({ request }) => {
  const response = await request.get('https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo');
  //expect(response.ok()).toBeTruthy();
  await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second

  expect(response.status()).toBe(200);
  const data = await response.json(); // Parse the response JSON
   
  const job = data.jobs[0];           // ✅ Safely extract the first job
expect(data.jobCount).toBe(4); // Check the job count
  expect(job.id).toBe(117234); 
  expect(job.jobTitle).toBe('Account Manager');
  console.log('✅ API response is correct!', job); 

  
}); */
  /* const data = await response.json();             // ✅ Only once
  const text = JSON.stringify(data);              // ✅ Use stringified version to check text
  expect(text).toContain('Janet');
  expect(data.data.first_name).toBe('Janet');

  console.log('✅ API response is correct!', data);  // ✅ Reuse parsed data */


/* test('API test POST', async ({ request}) => {
    const response = await request.post('https://reqres.in/api/register', {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });
    expect(response.status()).toBe(201);       
}); */

// Ensure only one import statement for test and expect
import { test, expect } from '@playwright/test';

/* test('API test PUT', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            "email": "enric@test.in",
            "password": "Bioneuroemocion"
        }
    });
    expect(response.status()).toBe(200);  
    const text = await response.text();
    expect(text).toContain('enric@test.in');
    console.log('✅ API response is correct!', response.body());
});
 */
/* test('API test GET', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts', {
    });
    expect(response.status()).toBe(200);  
    const data = await response.json();
    expect(data).toBeDefined();
    console.log('✅ API response is correct!', data);
    
}); */

/* test('API test POST', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            "email": "enric@test.in",
            "password": "Bioneuroemocion"
        }
    });
    expect(response.status()).toBe(201);  
    const text = await response.text();
    expect(text).toContain('enric@test.in');
    console.log('✅ API response is correct!', response.body());
}); */


test('API test DELETE', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1', {
        
    });
    expect(response.status()).toBe(200);  
    
});

test('test GET', async ({ request }) => {
    const response = await request.get('https://qa-ansel-platform.joinansel.com/employer/login', {
    });
    expect(response.status()).toBe(200);  
    
    
});

test('Login should succeed with valid credentials', async ({ request }) => {
    const response = await request.post('https://qa-ansel-platform.joinansel.com/employer/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: 'damianp+damianp@joinansel.com',
        password: 'Demo123456'
      }
    });
  
    const text = await response.text();
    console.log('Raw response text:', text); // Will likely be HTML
  
    expect(response.status()).toBe(200);
    expect(text).not.toContain('Invalid'); // Fallback content check
  });

test('API test PUT', async ({ request }) => {
    const response = await request.put('https://qa-ansel-platform.joinansel.com/employer/login', {
        data: {
            "email": "damianp+damianp@joinansel.com",
            "password": "Demo123456"
        }
    });
    expect(response.status()).toBe(200);  
    const text = await response.text();
    //expect(text).toContain('damianp+damianp@joinansel.com');
    console.log('✅ API response is correct!', response.body());
});


test('Fetch quotes with Authtoken', async ({ request }) => {
    const response = await request.post('https://qa-ansel-platform.joinansel.com/api/partner/v2/listQuotes', {
      headers: {
        'Authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNzgsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNS0wNFQxNzozNjowNy44MzY0OTk4N1oiLCJjdXN0b21EYXRhIjp7fX0.VbO5ocCbHVghsJL-3rjNOiTj0GJOg8QHkxuFZHh3eXI',
        'Content-Type': 'application/json'
      },
      data: {} // <- ✅ required, even if empty
    });
  expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('✅ Quotes response:', data);
  // Optional: basic assertion
    expect(Array.isArray(data.quotes)).toBe(true);
  });