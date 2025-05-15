// utils/company-data.ts
export const generateCompanyData = () => {
    const { faker } = require('@faker-js/faker');
  
    return {
      companyName: faker.company.name(),
      fein: `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`,
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      zip: faker.location.zipCode('#####'),
      state: faker.helpers.arrayElement(['Texas', 'California', 'Florida', 'Ohio', 'Georgia']),
      email: `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`,
    };
  };
  