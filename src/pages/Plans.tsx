import { useNavigate } from "react-router-dom";
import { InternetPlan } from "../types/plan";

const Plans = () => {
    const navigate = useNavigate();

    const plans: InternetPlan[] = [
        {
            id: "daily",
            name: "Daily Plan",
            description: "Unlimited internet for 24 hours",
            price: 5000,
            duration: "24 Hours",
        },
        {
            id: "weekly",
            name: "Weekly Plan",
            description: "Unlimited internet for 7 days",
            price: 20000,
            duration: "7 Days",
        },
    ];

    const selectPlan = (plan: InternetPlan) => {
        localStorage.setItem("selectedPlan", JSON.stringify(plan));
        navigate("/payment");
    };

    return (
        <div className="container">
            <h2>Choose Your Plan</h2>

            {plans.map((plan) => (
                <div key={plan.id} className="card">
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                    <p><strong>UGX {plan.price}</strong></p>
                    <button onClick={() => selectPlan(plan)}>
                        Select Plan
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Plans;
