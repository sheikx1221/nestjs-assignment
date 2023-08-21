import { IsEmail, IsString, Length } from "@nestjs/class-validator";
import { IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(3, 40)
    firstname: string;

    @IsString()
    @Length(3, 30)
    lastname: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsString()
    username: string;
}
