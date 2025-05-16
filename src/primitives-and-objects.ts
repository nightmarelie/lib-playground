import { z } from 'zod';

const numberOfGuests = z.number().min(1).max(3);

console.log(numberOfGuests.parse(3));
