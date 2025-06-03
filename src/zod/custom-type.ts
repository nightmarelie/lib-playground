import {z} from "zod";

const roomNumberPattern = /^[A-Z]{1,2}\d{1,3}$/;

const RoomNumberSchema = z.custom((roomType: string) => {
    if (typeof roomType !== 'string') {
        return false;
    }

    return roomNumberPattern.test(roomType);
})

export type RoomNumber = z.infer<typeof RoomNumberSchema>;

export const isRoomNumber = (value: unknown): value is RoomNumber => {
    return RoomNumberSchema.safeParse(value).success;
};

export const parseRoomNumber = (value: unknown): RoomNumber => {
    const result = RoomNumberSchema.safeParse(value);

    if (!result.success) {
        throw new Error(`Invalid room number: ${result.error.message}`);
    }

    return result.data;
};