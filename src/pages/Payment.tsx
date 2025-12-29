import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InternetPlan } from "../types/plan";
import { PaymentMethod } from "../types/payment";

const Payment = () => {
    const navigate = useNavigate();
    const [plan, setPlan] = useState<InternetPlan | null>(null);
    const [method, setMethod] = useState<PaymentMethod>("MTN_MOMO");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const storedPlan = localStorage.getItem("selectedPlan");
        if (!storedPlan) {
            navigate("/plans");
            return;
        }
        setPlan(JSON.parse(storedPlan));
    }, [navigate]);

    const submitPayment = () => {
        if (method !== "CARD" && phone.length < 9) {
            alert("Enter a valid phone number");
            return;
        }

        const paymentPayload = {
            planId: plan?.id,
            amount: plan?.price,
            method,
            phone,
            email,
        };

        console.log("Payment request:", paymentPayload);

        // Mock payment success
        navigate("/status?result=success");
    };

    if (!plan) return null;

    return (
        <div className="container">
            <h2>Payment</h2>

            <p><strong>{plan.name}</strong></p>
            <p>Amount: UGX {plan.price}</p>

            <label>Payment Method</label>
            <select value={method} onChange={(e) => setMethod(e.target.value as PaymentMethod)}>
                <option value="MTN_MOMO">MTN Mobile Money</option>
                <option value="AIRTEL_MONEY">Airtel Money</option>
                <option value="CARD">Card / Online Payment</option>
            </select>

            {method !== "CARD" && (
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            )}

            {method === "CARD" && (
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            )}

            <button onClick={submitPayment}>
                Pay Now
            </button>
        </div>
    );
};

export default Payment;
