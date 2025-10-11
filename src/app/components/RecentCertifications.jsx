"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, GraduationCap, FileText } from "lucide-react";

const certifications = [
  {
    title: "Generative AI and CyberSecurity",
    issuer: "DICT",
    date: "August 2025",
    icon: <Award className="text-yellow-500" size={28} />,
    span: "col-span-2 row-span-1",
  },
  {
    title: "Graphic Design Training Using Canva",
    issuer: "DICT",
    date: "June 2025",
    icon: <GraduationCap className="text-blue-500" size={26} />,
    span: "col-span-1 row-span-1",
  },
  {
    title: "ICT CSS - NCII",
    issuer: "TESDA Region 8",
    date: "March 2019",
    icon: <CheckCircle className="text-green-500" size={26} />,
    span: "col-span-1 row-span-1",
  },
  {
    title: "Cybersecurity and PNPKI Awareness Campaign",
    issuer: "DICT",
    date: "December 2023",
    icon: <FileText className="text-purple-500" size={26} />,
    span: "col-span-2 row-span-1",
  },
];

export default function RecentCertifications() {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-6 text-zinc-900 dark:text-white">
        <Award className="text-yellow-500" size={24} />
        Recent Certifications
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px]">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex flex-col justify-between ${cert.span}`}
          >
            <div className="flex items-center gap-2">
              {cert.icon}
              <h3 className="font-semibold text-zinc-900 dark:text-white text-sm md:text-base">
                {cert.title}
              </h3>
            </div>
            <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
