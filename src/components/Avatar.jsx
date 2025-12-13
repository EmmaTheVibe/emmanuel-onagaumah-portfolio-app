import { pfp } from "../utils/data";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="blur"></div>
      <div className="pfp">
        <img src={pfp} alt="pfp" />
      </div>
    </div>
  );
}
