import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Utilisateur } from "src/entities";

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): Utilisateur => {
    const req = ctx.switchToHttp().getRequest();
    console.log(req);
    return req.user;
});