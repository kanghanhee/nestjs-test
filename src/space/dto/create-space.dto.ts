import { IsNotEmpty } from 'class-validator';

export class CreateSpaceDto {
  @IsNotEmpty()
  spaceName: string;

  @IsNotEmpty()
  spaceLogo: string;
}
