import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import confetti from "canvas-confetti";
import Button from "./Button";
import Swal from "sweetalert2";

const data = [
  { option: "Match", style: { backgroundColor: "#f00", textColor: "black" } },
  { option: "Beso o cachetada", style: { backgroundColor: "#f90" } },
  { option: "Para ti de seguidores", style: { backgroundColor: "#ff0" } },
  { option: "TikTok", style: { backgroundColor: "#0a0" } },
  { option: "Coco Elige", style: { backgroundColor: "#00f" } },
  { option: "Qcy juli ta re linda", style: { backgroundColor: "#92f" } },
  {
    option: "Si te ries pierdes",
    style: { backgroundColor: "#f00", textColor: "black" },
  },
  { option: "Juli elige", style: { backgroundColor: "#f90" } },
  { option: "El chat elige", style: { backgroundColor: "#ff0" } },
  { option: "Discord con seguidores", style: { backgroundColor: "#0a0" } },
  { option: "Contar anecdotas", style: { backgroundColor: "#00f" } },
  { option: "UPD y milipilis", style: { backgroundColor: "#92f" } },
];

export default function Ruleta() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <h2 className="titulo  text-2xl sm:text-3xl my-6 font-bold tracking-wide">
        Ruleta de Contenido
      </h2>
      <div className="rounded-full shadow-2xl my-6 shadow-white">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={16}
          outerBorderColor={"#ff5"}
          onStopSpinning={() => {
            setMustSpin(false);
            const prize = data[prizeNumber].option;

            if (prize) {
              confetti();
              Swal.fire(`La opción ganadora es: ${prize}`);
            }
          }}
        />
      </div>

      <Button ariaLabel="Girar ruleta" click={handleSpinClick}>
        Girar
      </Button>
    </>
  );
}
