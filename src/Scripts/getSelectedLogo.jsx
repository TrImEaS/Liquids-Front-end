import realcolorImg from '../Images/Companies/real-color.png';
import tlineImg from '../Images/Companies/t-line.png';

export function getSelectedLogo (company) {
  if (company === "realcolor" || company === null) {
    return (
      <>
        <article className="m-auto pt-5">
          <img src={realcolorImg} width={180} alt="" />
        </article>

        <article className="m-auto">
          <p className="flex flex-col gap-y-4">
            <span className="font-medium text-xs">Real Color S.R.L</span>
            <span className="font-medium text-xs">Domicilio: NAZCA 3580, 2° P 'A'</span>
            <span className="font-medium text-xs">C.U.I.T.: 30-71045750-2</span>
          </p>
        </article>
      </>
    )
  } 
  
  return (
    <>
      <article className="m-auto py-4">
        <img src={tlineImg} width={180} alt="" />
      </article>

      <article className=" m-auto">
        <p className="flex flex-col gap-y-4 py-4">
          <span className="font-medium text-xs">Technology Line S.R.L</span>
          <span className="font-medium text-xs">Domicilio: NAZCA 3580, 2° P 'A'</span>
          <span className="font-medium text-xs">C.U.I.T.: 30-71045750-2</span>
        </p>
      </article>
    </>
  )
}