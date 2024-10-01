import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Video } from "@/components/video";


export default function Showcase() {
  return (
    <section id="showcase" className="container py-14">
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">

      </h2>
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Video />
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </section>
  );
}
