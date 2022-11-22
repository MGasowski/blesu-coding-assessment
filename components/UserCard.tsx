import React from "react";

// TODO Finish Implementing UseCard Component
interface IUserCard {
  _id: number;
  name: string;
  surname: string;
}

export const UserCard: React.FC<IUserCard> = ({ _id, name, surname }) => {
  return (
    <div className="flex flex-col">
      <div>
        <span>ID: </span>
        <span>{_id}</span>
      </div>
      <div>
        <span>Name: </span>
        <span>{name}</span>
      </div>
      <div>
        <span>Surname: </span>
        <span>{surname}</span>
      </div>
    </div>
  );
};
