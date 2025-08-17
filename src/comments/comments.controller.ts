import { Controller, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly CommentsService: CommentsService) { }

    @Post(':id')
    async getMovieComments(@Param('id') id: string) {
        return await this.CommentsService.getMovieComments(id)
    }

}
