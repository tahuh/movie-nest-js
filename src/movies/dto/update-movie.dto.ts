import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString, isString } from "class-validator";
import { CreateMovieDto } from "./create-movies.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto){}