import {z} from "zod";

// define a literal for a specific booking ID

const standardRoomLiteral = z.literal('standard-room');

type T1 = z.infer<typeof standardRoomLiteral>;

const RoomTypeEnum = z.enum([
    'standard-room',
    'deluxe-room',
    'suite-room',
])

const bookingSchema = z.object({
    roomType: RoomTypeEnum,
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

const bookingData = {
    roomType: 'deluxe-room',
    id: 1,
    title: 'Booking Title',
    body: 'Booking Body',
}

const parsedBooking = bookingSchema.parse(bookingData);

console.log(parsedBooking);




