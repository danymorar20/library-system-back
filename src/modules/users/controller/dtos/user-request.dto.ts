import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  Length,
  Matches,
} from 'class-validator';

export class UserRequestDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]+$/, {
    message: 'Name must only contain letters',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]+$/, {
    message: 'Last name must only contain letters',
  })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d+$/, {
    message: 'Phone must only contain numbers',
  })
  
  @Length(10, 10, {
    message: 'Phone number must have exactly 10 digits.',
  })
  phone: string;

  @IsEmail({}, { message: 'Email must have a valid format' })
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean({ message: 'Status must be boolean' })
  status: boolean;
}
