import { z } from 'zod';

const numberOfGuests = z.number().min(1).max(3);
const contactEmail = z.string().email();

console.log(numberOfGuests.parse(3));
console.log(contactEmail.parse('test@gmail.com'));


const roomBookingSchema = z.object({
    roomType: z.string(),
    dueDate: z.date(),
    numberOfGuests: z.number(),
    price: z.number().positive(),
});

const bookingData = {
    roomType: 'single',
    dueDate: new Date('2023-10-12'),
    numberOfGuests: 2,
    price: 100,
};

const parsedData = roomBookingSchema.parse(bookingData);

console.log(parsedData);
