import { Button } from "@/components/ui/button";
import { Models } from "appwrite";
import React from "react";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: Models.Document;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <Link to="" className="user-card">
        <Link to={`/profile/${user.$id}`}>
          <img
            className="w-20 rounded-full"
            src={user.imageUrl}
            alt={user.name + "pic"}
          />
        </Link>

        <p>{user.name}</p>
        <p>@{user.username}</p>
        <Button className="bg-primary-500">Follow</Button>
      </Link>
    </div>
  );
}

export default UserCard;
