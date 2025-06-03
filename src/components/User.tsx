import type { AllowedId, AllowedName } from "./Allow";
import Button from "./Button";

type UserProps = {
    users: {
        id: AllowedId;
        name: AllowedName;
        age: number;
        isReg: boolean;
    }[]

};

const User = ({ users }: UserProps) => {
    return (
        <div>
            {users.map(user => (
                <div key={user.id} className="text-rose-900 bg-indigo-300 border flex justify-center items-center gap-5 my-3 p-5">
                    <h2 className="text-2xl text-center">
                        The Name is <span className="text-black">{user.name}</span> and id is <span className="text-indigo-600 text-sm-font-bold">{user.id}</span>
                    </h2>
                    {user.isReg ? <p>Registered</p> : <p>Not registered</p>}
                    <Button>Click Me</Button>
                </div>
            ))}
        </div>
    );
};

export default User;
