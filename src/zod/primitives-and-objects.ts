import {z} from 'zod';

const numberOfGuests = z.number().min(1).max(3);
const contactEmail = z.string().email();

console.log(numberOfGuests.parse(3));
console.log(contactEmail.parse('test@gmail.com'));


const guestDetailsSchema = z.object({
    name: z.string(),
    age: z.number().min(18).max(100),
    email: z.string().email(),
});

const roomBookingSchema = z.object({
    roomType: z.string(),
    dueDate: z.string().refine(dateStr => !isNaN(Date.parse(dateStr)), {
        message: 'Invalid date format, expected YYYY-MM-DD',
    }),
    numberOfGuests: z.number(),
    price: z.number().positive(),
    guestDetails: z.array(guestDetailsSchema).min(1).max(3),
    // guestDetailsNonempty: z.array(guestDetailsSchema).nonempty(),
});

type Booking = z.infer<typeof roomBookingSchema>;

const validRoomBookingData: Booking = {
    roomType: 'single',
    dueDate: '2023-10-12',
    numberOfGuests: 2,
    price: 100,
    guestDetails: [],
    // guestDetailsNonempty: [{
    //     name: 10,
    //     age: 15,
    //     email: 'test@test.com'
    // }],
};

const invalidRoomBookingData = {
    roomType: 'single',
    dueDate: 'invalid-date',
    numberOfGuests: 4, // Exceeds max limit
    price: -50, // Negative price
}

const bookingData = {
    roomType: 'single',
    dueDate: new Date('2023-10-12'),
    numberOfGuests: 2,
    price: 100,
    guestDetails: [
        {
            name: 'John Doe',
            age: 25,
            email: 'john@gmail.com',
        }
    ]
};

const parsedData = roomBookingSchema.parse(bookingData);

console.log(parsedData);