import Link from "next/link";
import { allDocs } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { ChevronRight } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CoolMode } from "@/components/magicui/cool-mode";
import ShinyButton from "@/components/magicui/shiny-button";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TechStack from "@/components/tech-stack";
import AnimatedGradientText from "@/registry/components/magicui/animated-gradient-text";

function HeroPill({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href}>
      <AnimatedGradientText>
        <div
          className={cn(
            `absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
            `p-px ![mask-composite:subtract]`,
          )}
        />
        🎉 <Separator className="mx-2 h-4" orientation="vertical" />
        <span
          className={cn(
            `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            `inline`,
          )}
        >
          {title}
        </span>
        <ChevronRight className="ml-1 size-4 text-gray-500" />
      </AnimatedGradientText>
    </Link>
  );
}

export default async function Hero() {
  const post = allDocs
    .filter(
      (post) =>
        post.date && post.date <= new Date().toISOString() && post.published,
    )
    .sort((a, b) => {
      if (!a.date && !b.date) return 0; // Both dates are undefined, keep original order
      if (!a.date) return 1; // Move a to the end if date is undefined
      if (!b.date) return -1; // Move b to the end if date is undefined
      return compareDesc(new Date(a.date), new Date(b.date)); // Both dates are defined, proceed with comparison
    })[0];

  return (
    <section id="hero">
      <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
        <Link
          href="https://github.com/spaciousejar/learn-git-with-me.git"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub{" "}
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
          Learn Git with me
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          Learn Git with me is a free and open-source platform to learn Git and
          GitHub. It is designed to be simple and easy to understand for
          beginners.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/docs`}
          >
            <ShinyButton>Get Started</ShinyButton>
          </Link>
          <CoolMode>
            <Link
              href="#"
            >
              CHEATSHEET
            </Link>
          </CoolMode>
        </div>
        <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
          <TerminalIcon className="w-4 h-4 mr-1" /> ~ git init
        </span>
      </div>
    </section>
  );
}
