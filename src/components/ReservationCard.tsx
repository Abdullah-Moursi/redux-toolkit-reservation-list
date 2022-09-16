import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  return (
    <div
      style={{ position: "relative" }}
      className="reservation-card-container"
    >
      {" "}
      {name}
      <button
        style={{ right: "30%", position: "absolute" }}
        onClick={() => {
          dispatch(removeReservation(index));
        }}
      >
        Remove!
      </button>{" "}
      <button
        style={{ right: "5%", position: "absolute" }}
        onClick={() => {
          dispatch(removeReservation(index));
          dispatch(
            addCustomer({
              id: index.toString(),
              name,
              food: [],
            })
          );
        }}
      >
        Invite!
      </button>
    </div>
  );
}
