/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty({ message: '이메일 입력해 주세요!' })
  email: string; // email

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해 주세요!' })
  password: string;
}
