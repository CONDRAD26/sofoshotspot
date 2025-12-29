import { InternetPlan } from "../types/plan";

interface Props {
    plan: InternetPlan;
    onSelect: (plan: InternetPlan) => void;
}

const PlanCard = ({ plan, onSelect }: Props) => {
    return (
        <div className="plan-card" onClick={() => onSelect(plan)}>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <strong>UGX {plan.price}</strong>
            <p>{plan.duration}</p>
        </div>
    );
};

export default PlanCard;
