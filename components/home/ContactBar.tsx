"use client"
import { fetchContacts } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactCard from '@/components/cards/ContactCard'

const ContactBar = ({ image, id }: { image: string; id: string }) => {
    const [contacts, setContacts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await fetchContacts(id);
            setContacts(users);
        };

        fetchData();
    }, [id]);
  return (
    <>
      <div className="mt-6 flex h-36 w-36 flex-col content-center justify-center gap-4">
        <Image
          src={image}
          alt="avatar"
          height={120}
          width={120}
          className="mx-auto rounded-full"
        />
        <h2 className="text-center text-xl font-medium">Dipesh Ranjan</h2>
      </div>
      <div className=" mt-4 h-[1px] w-10/12 bg-primary-3"></div>
      <div className="mt-4 w-full px-7">
        <h3 className=" font-primary text-lg font-medium">Your Contacts</h3>
        <div className=" mt-2 flex flex-col gap-2" />
        <div className="mt-4 flex h-auto w-full gap-4">
            {contacts.map((contact) => {
                return (
                    <div key={contact.id} className="flex gap-4">
                        <ContactCard
                            image={contact.image}
                            name={contact.name}
                            bio={contact.bio}
                            username={contact.username}
                            id={id}
                        />
                    </div>
                );

            }
            )}
        </div>
      </div>
    </>
  );
};

export default ContactBar;
