"use client";

import { useEffect, useState } from "react";

import { findRandomUsers } from "@/lib/actions/user.actions";
import UserSearchCard from "../cards/UserSearchCard";
const RandomUsers = ({ id }: { id: string }) => {
  const [randomUsers, setRandomUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await findRandomUsers(id);
      setRandomUsers(users);
    };

    fetchData();
  }, [id]);
  return (
    <div className="mt-4 flex h-auto flex-col gap-4 px-7">
        <h3 className="font-semibold">
    Suggested Users
        </h3>
      {randomUsers.map((user) => {
        return (
          <div key={user.id} className="flex gap-4">
            <UserSearchCard
              image={user.image}
              name={user.name}
              bio={user.bio}
              username={user.username}
              contacts={user.contacts}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RandomUsers;
