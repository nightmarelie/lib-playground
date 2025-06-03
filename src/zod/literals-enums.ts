import {z} from "zod";

const bookingSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

// define a literal for a specific booking ID

const standardRoomLiteral = z.literal('standard-room');

type T1 = z.infer<typeof standardRoomLiteral>;




