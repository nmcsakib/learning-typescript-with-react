const User = (props: {number: number, id: string}) => {
    return (
        <div>
          <h2 className="text-2xl text-center">The number is {props.number} and id is {props.id}</h2>  
        </div>
    );
};

export default User;