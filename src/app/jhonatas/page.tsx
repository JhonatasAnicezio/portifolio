import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import album from '../../../public/0060253715653_600.jpg';
import Image from "next/image";


export default function Jhonatas() {
  return (
    <div className="flex justify-center items-center w-full text-white">
      <Dialog>
        <DialogTrigger asChild>
          <button>Share</button>
        </DialogTrigger>
        <DialogContent className="flex bg-black">
          <div className="w-[913px] h-[913px] relative">
            <Image src={album} quality={100} layout="fill" objectFit="cover" alt="album" />
          </div>
          <div className="flex items-center justify-center w-[500px] rounded-tr-sm rounded-br-sm">
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
