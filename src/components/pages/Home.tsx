import { memo } from "react";

export const Home = memo(() => {
  console.log("ホーム");
  return <p>ホームぺージ</p>;
});
