import { IsNumber, IsString, isString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsString({each:true})
    readonly genres: string[];
}