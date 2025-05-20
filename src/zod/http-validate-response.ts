import { z } from 'zod';

const API_URL = 'https://jsonplaceholder.typicode.com';

const bookingSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    completed: z.boolean(),
});

type Booking = z.infer<typeof bookingSchema>;

const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

(async () => {
    await fetchData<Booking>(`${API_URL}/posts/1`);
})()

