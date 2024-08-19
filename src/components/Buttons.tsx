"use client";

interface Props {
 showRotate: boolean;
 rows: number;
 columns: number;
 handleRotate: () => void;
}

export const Buttons = ({ showRotate, rows, columns, handleRotate }: Props) => {
 return (
  <div className="buttonsContainer">
   {showRotate ? (
    <button
     disabled={rows > 0 || columns > 0 ? false : true}
     className="buttonRotate"
     onClick={handleRotate}
    >
     Girar
    </button>
   ) : (
    <button className="buttonReset" onClick={handleRotate}>
     Restablecer
    </button>
   )}
  </div>
 );
};
