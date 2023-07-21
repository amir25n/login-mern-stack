import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        userName: {
            type: "string",
            trim: true,
            required: [true, "وارد کردن فیلد یوزر نیم الزامی میباشد"],
        },
        userEmail: {
            type: "string",
            trim: true,
            required: [true, "وارد کردن فیلد یوزر نیم الزامی میباشد"],
            unique: true,
        },
        userPassword: {
            type: "string",
            trim: true,
            minLength: 4,
            maxLength: 255,
            required: [true, "وارد کردن فیلد یوزر نیم الزامی میباشد"],
        },
    },
    {
        timestamps: true,
    }
);

export const User = model("User", userSchema);
