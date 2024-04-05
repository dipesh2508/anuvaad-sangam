import { fetchUser } from "@/lib/actions/user.actions";

const page = async ({id}:{id:string;}) => {
    const user = await fetchUser(id);
  return (
    <div>page</div>
  )
}

export default page