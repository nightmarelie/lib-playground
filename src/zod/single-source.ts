import {z} from 'zod';

const guestDetailsSchema = z.object({
    name: z.string(),
    age: z.number().min(18).max(100),
    email: z.string().email(),
});

type GuestDetails = z.infer<typeof guestDetailsSchema>;

const details: GuestDetails = {
    age: 12,
    email: 'test@test.com',
    name: 'Test',
}
