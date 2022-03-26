import { IsNotEmpty } from 'class-validator';

export class CreateSpaceDto {
  @IsNotEmpty()
  spaceName: string;

  @IsNotEmpty()
  spaceLogo: string;

  //hostId: number;

  //manager_code: string;

  //participant_code: string;
}
