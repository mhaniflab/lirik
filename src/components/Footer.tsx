/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <p className="flex w-full items-center justify-center gap-2 p-6 font-sans text-sm text-zinc-300 md:w-2/3 md:p-4 lg:w-1/2 ">
      Made with {`<3`} by{" "}
      <a
        className="text-pink-200"
        href="https://www.haniflab.com"
        target={"_blank"}
        rel="noreferrer"
      >
        haniflab
      </a>
    </p>
  );
}
