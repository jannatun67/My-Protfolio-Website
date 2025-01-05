import { DiMongodb } from "react-icons/di";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";

const Skills = () => {
  return (
    <div className="bg-gray-950 ">
      <div className="w-11/12 mx-auto">
        <h1 className="text-center md:text-5xl text-3xl  font-semibold text-white mb-10">
          Skills
        </h1>

        <div className="flex items-center justify-center gap-4 flex-wrap py-10">

          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <TiHtml5 className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <IoLogoCss3  className="text-7xl text-blue-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <FaJs  className="text-7xl text-yellow-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <FaReact  className="text-7xl text-cyan-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <FaNodeJs  className="text-7xl text-green-500"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <RiTailwindCssFill className="text-7xl text-blue-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-400 p-4">
            <DiMongodb  className="text-7xl text-green-500" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
