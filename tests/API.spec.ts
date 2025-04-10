import {test, expect} from '@playwright/test';


test('API test GET', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    /* const data = await response.json();
    expect(data.data.first_name).toBe('Janet');
    expect(data.data.last_name).toBe('Weaver');
    expect(JSON.stringify(data)).toContain('Janet'); */
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log('✅ API response is correct!', await response.json());


});
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
   

});