import { z } from 'zod';

const numberOfGuests = z.number();

console.log(numberOfGuests.parse(3));
