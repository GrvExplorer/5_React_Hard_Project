import { Button } from '@/components/ui/button';
import { Models } from 'appwrite'
import React from 'react'
import { Link } from 'react-router-dom';

type UserCardProps = {
  user: Models.Document;
};

function UserCard({user}: UserCardProps) {
  return (
    <div>
      <Link to='' className='user-card'>
        <img className='rounded-full w-20' src={user.imageUrl} alt={user.name + 'pic'} />
        <p>{user.name}</p>
        <p>
          @{user.username}
        </p>
        <Button>
          Follow
        </Button>
      </Link>
    </div>

  )
}

export default UserCard