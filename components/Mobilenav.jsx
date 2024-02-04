import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { textVariant2 } from "@/lib/Motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Mobilenav = ({ routes }) => {
  return (
    <div>
      <Sheet className="w-full">
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-1">
            {routes.map((route) => (
              <motion.div
                key={route.href}
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
              >
                <Link href={route.href} passHref>
                  <div className="text-[22px] font-serif whitespace-nowrap">
                    {route.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilenav;
