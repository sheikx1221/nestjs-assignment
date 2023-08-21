import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
    private jwtService: JwtService
  ) {}
  async login(loginDto: LoginAuthDto) {
    const user = await this.userModel.findOne({ where: { username: loginDto.username }});
    if (!user) throw new HttpException("No user found!", 404);
    if (loginDto.password !== user.password) throw new HttpException("Invalid Password!", 401);

    delete user.password;
    const access_token = await this.jwtService.signAsync({ id: user.id, email: user.email }, {
      expiresIn: '24h'
    });
    
    return { ...user, access_token };
  }
}
