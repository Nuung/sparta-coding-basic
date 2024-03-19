import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { createBoardDto } from './dto/create-board.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  // async createBoard(createBoardDto: createBoardDto): Promise<void> {
  //   const newBoard: Board = {
  //     title: createBoardDto.title,
  //     content: createBoardDto.content,
  //     createdAt: new Date(),
  //   };

  //   this.boards.push(newBoard);
  // }
}
