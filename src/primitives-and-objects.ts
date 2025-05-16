import { z } from 'zod';

const numberOfGuests = z.number().min(1).max(3);
const contactEmail = z.string().email();

console.log(numberOfGuests.parse(3));
console.log(contactEmail.parse('test@gmail.com'));
