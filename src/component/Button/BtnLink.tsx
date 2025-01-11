import Link from "next/link";
// import "../styles/globals.css"; // pastikan path ini mengarah ke file CSS Tailwind yang telah dihasilkan oleh Tailwind CSS

interface BtnLink {
  url: string;
  labelBtn: string;
}
function BtnLink(props: BtnLink) {
  return (
    <Link href={props.url}>
      <button>{props.labelBtn}</button>
    </Link>
  );
}

export { BtnLink };
