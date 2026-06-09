import { useState } from "react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingIcons() {
  const [open, setOpen] = useState(false);

  const handleWhatsapp = () => {
    window.open(
      `https://wa.me/9550327339?text=Hi I am interested in Detection Forge `,
      "_blank"
    );
  };

  const handleEmail = () => {
  window.location.href =
    "mailto:lavanyainti14@gmail.com?subject=Detection Forge Inquiry&body=Hi, I am interested in Detection Forge.";
};

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-end gap-3">

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.7 }}
                transition={{ duration: 0.25 }}
                onClick={handleWhatsapp}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-teal text-green-500 cursor-pointer"
              >
                <FaWhatsapp size={22} />
              </motion.div>

              {/* <motion.a
                initial={{ opacity: 0, x: 30, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.7 }}
                transition={{ duration: 0.35 }}
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-blue-600 text-blue-600"
              >
                <FaLinkedinIn size={20} />
              </motion.a> */}

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.7 }}
                transition={{ duration: 0.45 }}
                onClick={handleEmail}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-red-600 text-red-600 cursor-pointer"
              >
                <MdEmail size={22} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          whileHover={{ scale: 1.08 }}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-teal shadow-2xl border-2 border-white"
        >
          <MessageCircle size={26} className="text-white"/>
        </motion.div>

      </div>
    </div>
  );
}