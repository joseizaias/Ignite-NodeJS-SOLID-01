import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const userExists = this.usersRepository.findById(user_id);

        if (!userExists) {
            throw new Error("User does not exist.");
        }

        if (!userExists.admin) {
            throw new Error("The user is not an admin");
        }

        const allUsers = this.usersRepository.list();
        return allUsers;
    }
}

export { ListAllUsersUseCase };
