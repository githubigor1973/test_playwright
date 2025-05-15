/*  import { test, expect } from '@playwright/test';


test.only('API test GET', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
          'x-api-key': 'reqres-free-v1'
                }
            }
        });
    
    //expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
     const data = await response.json();
    //expect(data.data.first_name).toBe('Janet');
    //expect(data.data.last_name).toBe('Weaver');
    //expect(JSON.stringify(data)).toContain('Janet'); 
    const text = await response.text();
    //expect(text).toContain('Janet');
    console.log('✅ API response is correct!', data);
    console.log('📧 Email:', data.data[0].email);


}); 

 */
import { test, expect } from '@playwright/test';
import { request } from 'http';

test('API test GET', async ({ request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2',{
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
   const text = await response.text();
   console.log(text);
   const data = await response.json();
   console.log('API data',data);
   expect(data.data[1].last_name).toBe('Ferguson');
   console.log('Last Name: ', data.data[1].last_name);
});

/* test( 'API test POST', async ({ request})=> {
    const response = await request.post('https://reqres.in/api/users', {
        
        data: {
            'name': 'Igor',
            'job': 'Developer',
        },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log('API data',data);
    expect(data.name).toBe('Igor');
    console.log('Name:', data.name);
}); */

/* test('API test POST', async ({ request}) => {
    const response = await request.post('https://reqres.in/api/register', {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
          },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('API data',data);
    expect(data.token).toBe('QpwL5tke4Pnpja7X4');
    console.log('Token:', data.token);
    const token = data.token;
// Use this token in Authorization headers in another test
    
}); */

/* test('API test POST', async ({ request}) =>{
    const response = await request.post('https://qa-voya-platform.joinansel.com/api/partner/v2/prepareApp', {
        headers: {
            'Authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1OTIsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNS0wNVQwNTo1NzoyNi40Mzk5ODk2OFoiLCJjdXN0b21EYXRhIjp7fX0.XeMvIftRJ8V3yF8ZiE1PJhEUgY4HQZ5d_bc0OSmOw08',
            'Password': 'Demo123456',
            'Content-Type': 'application/json'

        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('API data',data);
    console.log('Token:', data.token);
    const token = data.token;
// Use this token in Authorization headers in another test
    
}); */

/* test('API test POST', async ({ request}) =>{
    const response = await request.post('https://qa-ansel-platform.joinansel.com/api/support/v1/listMyPermissions', {
        headers: {
            'Authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNDMsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNS0wNVQwNjowODoyOC4xMTkxNzk2ODRaIiwiY3VzdG9tRGF0YSI6e319.YGtmHXK51ErGVVxT5SQ5dE_Wn5ioyM_c1qjGZEZLp2U',
            'Password': 'aeMa0buetoaW',
            'Content-Type': 'application/json'

        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('API data',data);
    console.log('Token:', data.token);
    const token = data.token;
// Use this token in Authorization headers in another test
    
}); */

/* test('MFA login API request', async ({ request }) => {
    const response = await request.post('https://qa-ansel-platform.joinansel.com/support/mfa', {
      headers: {
        'Content-Type': 'application/json',
        'Mfaauthtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNDMsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNS0wNVQwNjozNDowMS43NTA2NjY5ODdaIn0.y5kQ_taGMvT0saUR854S32XCydbCPfb_CF8Zwo1SWgY',  // ← insert full token
        'Password': 'aeMa0buetoaW',
    }
    });
  
    expect(response.status()).toBe(200);  // ✅ 200 means MFA passed
  
    
    // Optionally: extract token if provided for later use
    
  }); */

  test('API test', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1', {
    });  
    expect(response.status()).toBe(200);
      expect(response.status()).toBe(200);
      const data = await response.json();
      console.log('API data',data);
      console.log('Token:', data.token);
      const token = data.token;
// Use this token in Authorization headers in another test

  });

  test('Create POST API request using static request body', async ({ request }) => {
    const postAPIResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
      data: {
        firstname: "testers talk playwright",
        lastname: "testers talk api testing",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01"
        },
        additionalneeds: "super bowls"
      }
    });
  
    
    const data = await postAPIResponse.json();
  
    expect(postAPIResponse.status()).toBe(200);
    console.log('✅ POST API request successful!', data);
  });