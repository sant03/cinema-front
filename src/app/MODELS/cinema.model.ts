export class Movie{
    id!: number
    title!: string
    description!: string
    category!: Category;
}

export class Category{
    id!: number
    name!: string;
    description!: string;
}

export class ShowTime{
    id!: number
    movie!: Movie;
    showRoom!: ShowRoom;
    date!: any;
}

export class ShowRoom{
    name!: string;
    seats!: number;
}

export class FunctionRoom{
    showRoom!: ShowRoom;
    seats!: Seat[]
    showTime!: ShowTime;
}

export class Seat{
    id!: number;
    name!: string;
    isReserved!: boolean
    isReported!: boolean;
}

export class Reservation{
    userId!: number;
    seatId!: number;
    showTimeId!: number;
    isCanceled!: boolean;
    isReported!: boolean;
}

export class Report{
    reservationId!: number;
    description!: string;
}

export class User{
    id!: number;
    username!: string;
    foto!: string;
    role!: Role
}

export class Role{
    name!: string;
    code!: string;
}

export class SignUpRequest{
    username!: string;
    password!: string;
    role!: Role
}

export class LoginRequest{
    username!: string;
    password!: string;
}

