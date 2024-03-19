/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { createBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('')
  async getAllBoards(): Promise<Board[]> {
    return await this.boardsService.getAllBoards();
  }

  // @Post('')
  // @UsePipes(ValidationPipe)
  // async createBoard(@Body() createBoardDto: createBoardDto): Promise<void> {
  //   return await this.boardsService.createBoard(createBoardDto);
  // }
}
