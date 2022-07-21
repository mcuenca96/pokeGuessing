import Image from "next/image";
import { SilhouetteProps } from "./types";

const Silhouette = ({ sprite, hidden }: SilhouetteProps) => {
  return sprite ? (
    <Image
      className={hidden ? "brightness-0" : undefined}
      src={sprite}
      alt={sprite}
      width={300}
      height={300}
    />
  ) : null;
};

export default Silhouette;
