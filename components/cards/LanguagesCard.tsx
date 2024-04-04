"use client"
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Language } from "@/lib/constants/language";
import { HiCheck } from "react-icons/hi2";
import { updateLanguage } from "@/lib/actions/language.actions";

const LanguagesCard = ({ languages, userLang, id }: { languages: Language; userLang: string; id:string; }) => {

  async function onClick() {
    await updateLanguage({userId:id, language: languages.value});
  }

  return (
    <Card className="w-full">
      <CardHeader className="overflow-hidden px-2 py-3">
        <div className="grid grid-cols-6 items-center gap-2">
          <Image
            src={languages.image}
            width={40}
            height={40}
            alt="avatar"
            className="col-span-1 h-10 w-10 rounded-full"
          />
          <div className="col-span-4">
            <CardTitle className="text-xl">{languages.key}</CardTitle>
          </div>
          <div>
            {!(userLang === languages.value) && 
            <Button size={"sm"} onClick={onClick}>
              <HiCheck size={15} />
            </Button>
}
            {(userLang === languages.value) &&
            <Button size={"sm"} onClick={onClick} disabled variant={"success"}>
                <HiCheck size={15} />
            </Button>
            }
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default LanguagesCard;
