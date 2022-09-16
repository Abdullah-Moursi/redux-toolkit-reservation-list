import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}
export default function CustomerCard({ id, name, food }: CustomerCardType) {
  const [foodInput, setFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((meal) => (
            <p>{meal}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            placeholder="Enter Meal"
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
            style={{ marginRight: 3 }}
          />
          <button
            onClick={() => {
              if (foodInput.trim())
                dispatch(
                  addFoodToCustomer({
                    id,
                    food: foodInput,
                  })
                );
              setFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
