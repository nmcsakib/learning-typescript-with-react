
type UserProps = {
    users: {
        id: number;
        name: string;
        age: number;
        isReg: boolean;
    }[]

}

const User = ({ users }: UserProps) => {
    return (
        <div>
            {
                users.map(user => <div className="text-rose-400 bg-cyan-300 border flex justify-center items-center gap-5 my-3 w-1/2 py-10">
                    <h2 className="text-2xl text-center">The Name is {user.name} and id is {user.id}</h2>

                    {user.isReg ? <p>Registerd</p> : <p>Not registerd</p>}
                </div>)
            }
        </div>
    );
};

export default User;