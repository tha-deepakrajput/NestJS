/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(){
        return 'Hey, Your are learning NestJS.'
    }
}
