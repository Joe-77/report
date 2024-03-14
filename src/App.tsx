import { useRef } from "react";
import { data } from "./data/data";
import { useReactToPrint } from "react-to-print";
export default function App() {
  const myData: any = data;

  const component = useRef<HTMLDivElement>(null);

  const generatePDF: () => void | any = useReactToPrint({
    content: () => component.current,
    documentTitle: "Report USER",
  });

  return (
    <div className="bg-[#46617b] flex flex-col-reverse gap-10  items-center justify-between md:px-28 py-16">
      {myData?.map((e: any, id: number) => (
        <div ref={component} className="w-[100%] m-auto">
          <div className="w-full min-h-screen bg-[#46617b] flex justify-center w-full">
            <div
              key={id}
              className=" bg-white container lg:w-1/2 pt-5 pb-16 mx-7 px-10 min-h-[70vh]"
            >
              <div className="flex justify-center">
                <img
                  src="https://all-safe-seven.vercel.app/_next/image?url=https%3A%2F%2Fwww.allsafeeg.com%2Fuploads%2Fsettings%2Fsource%2F18925.png&w=128&q=75"
                  alt=""
                />
              </div>
              <p className=" uppercase font-modern text-5xl text-center mt-7 text-[#46617b]">
                report
              </p>

              <div className="mt-10 text-sm">
                <p className="text-[#6d8397] text-sm pb-2 border-b-[1px] border-[#46617b]">
                  Name : {e.name}
                </p>
                <p className="text-[#6d8397] text-sm pb-2 border-b-[1px] border-[#46617b] pt-3">
                  Level : {e.level}
                </p>
              </div>

              <div className="mt-8 text-sm text-[#536c84] ">
                <h1 className="font-bold">GRADING SYSTEM:</h1>
                <div className="mt-5 text-gray-400">
                  <div className="flex gap-12">
                    <p>A : {e.grading.a}</p>
                    <p>C : {e.grading.c}</p>
                    <p>F : {e.grading.f}</p>
                  </div>
                  <div className="flex gap-12 mt-3">
                    <p>B : {e.grading.b}</p>
                    <p>D : {e.grading.d}</p>
                  </div>
                </div>
              </div>

              <table className="mt-5">
                <tr>
                  <td className="bg-[#46617b] text-white" colSpan={3}>
                    BEHAVIOR
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    Cooperative
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.behavior.cooperative}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    Neat and orderly
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.behavior.orderly}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    Responsible
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.behavior.responsible}
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#46617b] text-white" colSpan={3}>
                    ACADEMICS
                  </td>
                </tr>

                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    German II
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.academic.german}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    Social Studies
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.academic.social}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    World History
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.academic.history}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    Geometry
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.academic.geometry}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    Computer
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.academic.computer}
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-r-[2px] border-b-[2px] border-r-[#46617b] border-b-[#46617b] text-gray-500"
                    colSpan={2}
                  >
                    English
                  </td>
                  <td className="text-center border-b-[2px] border-b-[#46617b]">
                    {e.academic.english}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={generatePDF}
        className="px-5 py-2 bg-red-600 text-white rounded-full duration-500 hover:scale-125 text-sm"
      >
        Export PDF
      </button>
    </div>
  );
}
