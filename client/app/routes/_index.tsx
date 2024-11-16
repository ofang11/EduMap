import type { MetaFunction } from "@remix-run/node";
import Landing from "../page/Landing";

export const meta: MetaFunction = () => {
  return [
    { title: "EduMap" },
    { name: "description", content: "Plan your courses." },
  ];
};

export default function Index() {
  return (
      <div>
        <Landing />
      </div>
  );
}
