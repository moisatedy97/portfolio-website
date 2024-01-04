import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <div className="mx-[0.5rem] mt-[3rem] flex max-w-[100rem] justify-center gap-4 border-t-2 md:mx-[8rem] md:mt-[8rem] lg:mx-[14rem] 2xl:mx-[20rem]">
      <h6 className="my-4 text-wrap text-center text-xs font-semibold text-primary/90 lg:text-sm">
        Copyright © 2023 Tedy Gabriel Moisa • Full Stack Web Developer • moisatedy@gmail.com
      </h6>
    </div>
  );
}
